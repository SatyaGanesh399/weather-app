import React from "react";
import axios from "axios";
export default function WeatherApp() {
  let [weatherData, setWeatherData] = React.useState({});
  const [location, setLocation] = React.useState("New York");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&units=metric&appid=307d05c02ae2261eb06920a7bf055b1a`;
  let fetchData = function (event) {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setWeatherData(response.data);
        console.log(weatherData);
      });
    }
  };

  return (
   
      <div className="weather-app">
        <input type="text"
                name="search-box"
                onChange={event => fetchData(event.target.value)}
                onKeyPress = {fetchData}
                placeholder="Enter location"/>
        <div className="top-side">
          <h4>Lucknow</h4>
          <h2>36 C</h2>
          <h4 className="rotate-element">Partly Coud</h4>
        </div>
        <div className="bottom-side">
          <div className="feels-like">
            <h4>38 C</h4>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <h4>20%</h4>
            <p>Humidity</p>
          </div>
          <div className="wind-speed">
            <h4>12 Kmph</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
  );
}
