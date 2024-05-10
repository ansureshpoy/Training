import React from "react";
import { useState } from "react";

function Weather()
{

const [weatherData, setWeatherData] = useState([
    { day: "Monday", condition: "Sunny", temperature: "16°C" },
    { day: "Tusday", condition: "Cloudy", temperature: "22°C" },
    { day: "Wednesday", condition: "Sunny", temperature: "25°C" },
    { day: "Thrusday", condition: "Sunny", temperature: "32°C" },
    { day: "Friday", condition: "Sunny", temperature: "23°C" },
    { day: "Saturday", condition: "Sunny", temperature: "18°C" },
    { day: "Sunday", condition: "Raining", temperature: "20°C" },
    ]);

return (
  <div>
        <h1>Weather Report</h1>
        
        {weatherData.map ((weat) => (
            <div key = {weat.day}>
             <h2>{weat.condition}</h2>
             <h2>{weat.temperature} </h2>
            </div>
          
        ))}

  </div>

);

}


export default Weather;

