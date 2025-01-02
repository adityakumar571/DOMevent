import React, {useState} from "react"
import './Color.css'
const ColorPiker=()=>{
    const[color,setColor]=useState("#FFFFF")

   const hanleColorChange=(event)=>{
   setColor(event.target.value)
   }
    return(
    <>
   <div className="color-piker-container">
   <h1> Color Picker</h1>
   <div className="color-display" style={{background:color}}>
    <p>Selected Color:{color}</p>
   </div>

   <label>select a color</label>
   <input type="color" value={color} onChange={hanleColorChange} />

   </div>
    </>
    )
}
export default ColorPiker