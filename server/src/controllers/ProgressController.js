const ProgressModel=require('../models/ProgressModel')



const postProgress=async (req,res)=>{
    try {
        // Extract required fields from the request body
        const { user_id, goal_id, progress_value } = req.body;
    
        // Validate required fields
        if (!user_id || !goal_id || !progress_value) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
    
        // Validate progress_value is a number between 0 and 100
        // if (typeof progress_value !== 'number' || progress_value < 0 || progress_value >= 0) {
        //   return res.status(400).json({ message: 'Invalid progress value' });
        // }
    
        // Create new progress object and save to database
        const progress = new ProgressModel({
          user_id,
          goal_id,
          progress_value
        });
        await progress.save();
    
        // Return the new progress object in the response
        res.status(201).json(progress);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
const getProgress=async (req,res)=>{
    const { userid } = req.params;
    try {
      const progressList = await ProgressModel.find({ user:userid,isDeleted:false })
        .populate('user_id goal_id')
        ;
        if(progressList.length!=0) return res.status(200).send({ status: true, data: progressList });
        else return res.status(404).send({ status: false, message:"no progress created" });
    } catch (err) {
      res.status(500).send({message:err.message});
    }
  
}

const updateProgress=async(req,res)=>{
const {userid}= req.params
const data = req.body;

try {
  const progressList = await ProgressModel.findOneAndUpdate({ user:userid,isDeleted:false } ,{ data }, { new: true })
   if(progressList!==0)  return res.status(200).send({ status: true, data: progressList });
     else return res.status(400).send({status:false,message:"No data found"})
} catch (err) {
  res.status(500).send({message:err.message});
}
}

const deleteProgress=async (req,res)=>{
  try {
    let id=req.params
    console.log(id)
    const progress = await ProgressModel.findOneAndUpdate( { _id: id },
      { $set: { isDeleted: true, deletedAt: new Date().toISOString() } },
);
    if (progress==0) {
      return res.status(404).send({ status: false, message: 'Progress not found' });
    }
    return res.status(200).send({ status: true, data: "deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
}



    module.exports.postProgress=postProgress
    module.exports.getProgress=getProgress
    module.exports.updateProgress=updateProgress
    module.exports.deleteProgress=deleteProgress