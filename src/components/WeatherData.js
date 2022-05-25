import React from "react"

import "./WeatherData.css";

export default function WeatherIweatherInput (){
    const logOnClick = () => console.log("Hello")
    return(<div onClick={() => logOnClick()}>Hello</div>)
}