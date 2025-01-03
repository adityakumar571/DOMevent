import './Clock.css'
import { useEffect, useState } from 'react'
export default function Clock() {
    const [time,setTime]=useState(new Date())
    function callback(){ 
setTime(new Date())
    }
    useEffect(()=>{

        const IntervalId=setInterval(callback,1000);
        return ()=>{
         clearInterval(IntervalId)
        }
    } , [])


    function formatTime(){
        let hours=time.getHours()
        let minutes=time.getMinutes()
        let second=time.getSeconds()
        const meridiem=hours>=12?"PM":"AM"
        hours=hours%12||12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)}:${meridiem}`
    }

    function padZero(number){
        return (number<10?"0":"")+number
    }


  return (

    
    <div className="clock-container">
    <div className="clock">
        <span>{formatTime()}</span>
    </div>
      
    </div>
  )
}
