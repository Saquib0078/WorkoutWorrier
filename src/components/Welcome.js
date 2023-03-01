import React,{ useState} from 'react'
import Firstname from './Firstname'
import './Welcome.css'



function Welcome() {
  const [page,setPage]=useState(0)

  const CurPage=()=>{
    setPage(page+1)
  }
 
  return (
    <div className='parent'>
    <div  className='title'>
      <div id="heading">
        {page=== 0 && (
          <>
        <h2>Welcome! Let's customize your </h2>
        <h2>Fitness Goals</h2>
        <button onClick={CurPage}>CONTINUE</button>
        </>
     
        )}
        {page===1 && <Firstname/>}
    </div>
    </div>
    </div>
  )
}

export default Welcome
