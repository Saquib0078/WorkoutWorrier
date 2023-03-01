const ExerciseModel= require('../models/ExerciseModel')
const UserModel=require('../models/UserModel')

const createExcercise=async(req,res)=>{
try {
    let data=req.body

let excercise=await ExerciseModel.create(data)
return res.status(201).send({status:true,data:excercise})
} catch (error) {
    return res.status(500).send({status:false,message:error.message})
}
}

const getExercisesByQueries = async (req, res) => {
    const query = req.query;
    const orQuery = [];
  
    for (const [key, value] of Object.entries(query)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          orQuery.push({[key]: v});
        }
      } else {
        orQuery.push({[key]: value});
      }
    }
  
    try {
      const exercises = await ExerciseModel.find({$or: orQuery});
  
      if (exercises.length === 0) {
        return res.status(404).send({status: false, message: 'No exercises found'});
      }
  
      res.status(200).send({status: true, message: 'Success',count:exercises.length, data: exercises});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };


const UpdateExercise=async(req,res)=>{
    try {
        let exid=req.params
        let data=req.body
        if(!exid) return res.status(400).send({status:false,message:"userid is required"})

        let updateExercise=await ExerciseModel.findOneAndUpdate({ _id: exid }, data, { new: true })
        return res.status(200).send({ status: true, message: 'Success', data: updateExercise })

    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

const deleteExercise=async(req,res)=>{
    try {
        let exid=req.params
        if(!exid) return resizeBy.status(400).send({status:false,message:"userid is required"})

        let deleteProduct = await ExerciseModel.findOneAndUpdate(
            { _id: exid },
            { $set: { isDeleted: true, deletedAt: new Date().toISOString() } }
            
          );
        return res.status(200).send({ status: true, message: 'Deleted Successfully'})

    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}





  
  
 



module.exports.createExcercise = createExcercise
module.exports.getExercisesByQueries = getExercisesByQueries
module.exports.UpdateExercise = UpdateExercise
module.exports.deleteExercise = deleteExercise


