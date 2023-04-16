import React ,{useState}from "react";

import "./MainFile.css"
export default function MainFile() {

  const[tableData,setTableData]=useState([])
  function handleMouseOver(){
    const time=new Date().toLocaleTimeString()
    const event="mouse in"
    setTableData([...tableData,{time,event}])
   
  }
  function handleMouseOut(){
    const time=new Date().toLocaleTimeString() 
    const event="mouse out"
    setTableData((prevData)=>[...prevData,{time,event}])
  }
  return (
    <div>
     <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>This is h1 tag</h1>
     <h2>This is h2 tag</h2>
     <div>This is div tag</div>
     <table>
       <thead>
         <tr>
           <th>Time</th>
           <th>Event Name</th>
         </tr>
       </thead>
       <tbody>
         {
           tableData.map((data,index)=>{
           return(
            <tr key={index}>
            <td>{data.time}</td>
            <td>{data.event}</td>
          </tr> 
           )
           }

           )
         }
        
       </tbody>
     </table>
    </div>
  );
}