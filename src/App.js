import { useState } from 'react';
import './App.css';

function App() {
  const[number,setNumber]=useState(2)
  const num=[1,2,3,4,5,6,7,8,9,10]
  function changeNumber(){
    //Math.floor(Math.random() * (max - min) + min);
    const randomNom=Math.floor(Math.random()*99+1)
    setNumber(randomNom)
  }
  return (
    <div className='container'>
      <button onClick={changeNumber}> Table of : ({number})</button>
      <ul>
       {
        num.map((nums,index)=> 
        <li key={index}>{nums*number}</li>
        )
       }
       </ul>
    </div>
  );
}

export default App;
