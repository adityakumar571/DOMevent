import React from 'react'
import ImageGenerator from '../Components/ImageGenerator/ImageGenerator'
import Couter from '../Components/Counter/Couter'
import ColorPiker from '../Components/ColorPinker.js/ColorPiker'
import Todo from '../Components/To-Do/Todo'
import Stopwatch from '../Components/Stopwatch/Stopwatch'
function Home() {
    const heading={1:"React Practice with  different Components"}
  return (
    <div>
       <h2 className='Heading'>{heading[1]}</h2>
      <div>
        <ImageGenerator/>
        <Couter/>
        <ColorPiker/>
        <Todo/>
        <Stopwatch/>
      </div>
    </div>
  )
}

export default Home
