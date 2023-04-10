
import { useState } from 'react';
import './App.css';


function App() {
  

  const[eventTime,setEventTime]=useState([])



  
function HandleMouseOver(){
  const date=new Date()
  const time =date.getTime()
  setEventTime([...eventTime,time])
 
   
}
function HandleMouseOut(){
  const date=new Date()
  const time =date.getTime()
  setEventTime([...eventTime,time])
 
}
  
  return (

    <div>
      <h1 onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>Tracking the Date on events</h1>
      <h2>This is h2 heading</h2>
      <div>This is div</div>
      <div>
        <div>
          <h1>Time</h1>
       <ul>
        {
          eventTime.map((data,index)=><li key={index}>{data}</li>)
        }
       </ul>
       </div>
       <div>
      
       </div>
       </div>
    </div>
  );
}

export default App;
