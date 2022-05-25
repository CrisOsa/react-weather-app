import React from "react";
import URL from "./URL";
   
    
    
     function CityPlace(props) {
        const City =await axios.get(URL).then(res => 
            cityName.props.textContent = res.data.name)
        return (
            <button className= "CityPlace" onClick={props.onClick}>
                {props.value}
               
            </button>
        )
    }
    

export default CityPlace