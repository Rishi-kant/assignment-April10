

import React, { useState } from 'react'
import style from "./MainFile.module.css"

export default function MainFile() {
    
    const Greetings=[
        "Hi!",
        "Morning!",
        "How are things?",
        "What’s new?",
        "It’s good to see you",
        "G’day!",
        "What’s up?",
        "How’s it going?",
        "Yo!",

    ]
    const[greetIndex,setGreetIndex]=useState(0)

    function changeGreet(){
      
        setGreetIndex((greetIndex+1)%Greetings.length)
        
    }
  return (
    <div  className={style.container}>
        <button onClick={changeGreet}>Change Greeting !!</button>
        <h1>{Greetings[greetIndex]}</h1>

    </div>
  )
}
