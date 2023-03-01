import React,{useState} from 'react'
import Welcome from './Welcome'
import Firstname from './Firstname'
import ActivityLevel from './ActivityLevel'
import Signup from './Signup'
import GoalBarriers from './GoalBarriers'
import PersonalInfo from './PersonalInfo'
import SetGoals from './SetGoals'
import Gender from './Gender'
import HeightWeight from './HeightWeight'
import './Form.css'
function Form() {
    const[page,setPage]=useState(0)
    const FormTitles=["Welcome","Whats your first name?","Thanks!Now for your Goals","In the past, what have been your barriers to losing weight?","What is your baseline activity level?","Please select which gender we should use to calculate your calorie needs.","How tall are you?","Almost there!Create your account"]

    const PageDisplay=()=>{
        switch (page) {
            case 0:
              return <Welcome  />
            case 1:
              return <SetGoals />;
            case 2:
              return <GoalBarriers />;
            case 3:
              return <ActivityLevel />;
            case 4:
              return <Gender />;
              case 5:
              return <HeightWeight/>
              case 6:
                return <Signup/>
    
            default:
              return 0
          }

    }
  return (
    <div className='form'>
   <div className='nav'>
    <img src="\fit.png"/>
   </div>
    <div className='form-container'></div>
    <div className='header'>
        <h1>{FormTitles[page]}</h1>
      
    </div>
   
    <div className='body'>{PageDisplay()}
    <div className='progressbar'>
        <div style={{width:page===0?"14.2%":page==1?"28.4%":page==2?"42.6%":page==3?"56.8%":page==4?"71%":page==5?"85.2%":"100%"}}></div>
    </div>
    </div>

    {page === 7 ? null : (
  <div id='footer'>
    <button
    id='back'
      disabled={page === 0}
      onClick={() => { setPage((currpage) => currpage - 1) }}
    >
      Back
    </button>
    <button
      disabled={page === FormTitles.length - 1}
      onClick={() => { setPage((currpage) => currpage + 1) }}
    >
      Next
    </button>
  </div>
    )}
    </div>
  )
}

export default Form
