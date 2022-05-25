import React from "react";

function URL() {

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=fe390c054fc5845a3ed3525f88e4b825'
const API_UNITS ='&units=metric'
const city = input.value

URL = API_LINK + city + API_KEY + API_UNITS
   return 
}
export default URL;