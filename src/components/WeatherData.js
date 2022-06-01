import React from "react"

import "./WeatherData.css"

export default function WeatherInput (){
    const logOnClick = () => console.log("Hello")
    return(
    <div className='button'> 
        <button onClick={() => logOnClick()}>Hello</button>
        </div>
        )
}