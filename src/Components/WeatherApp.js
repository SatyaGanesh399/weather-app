import React from "react";

export default function WeatherApp() {
  let [weatherData, setWeatherData] = React.useState('');
  const [location, setLocation] = React.useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=307d05c02ae2261eb06920a7bf055b1a`;

  function saveLocation(e) {
    setLocation(e.target.value);
  }

  let fetchData = function (event) {
    if (event.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setWeatherData(res))
    }
  };
console.log(weatherData)
  return (
    <div className="weather-app">
      <input
        type="text"
        name="search-box"
        onChange={saveLocation}
        onKeyPress={fetchData}
        placeholder="Enter location"
        value = {location}
        autoComplete= 'off'
      />

      {weatherData.name ? (
        <div>
         <div className="top-side">
            <h6>Country : {weatherData.sys.country}</h6>
            <h4 className="location-name">{weatherData.name}</h4>
            <h2 className="location-temp">{weatherData.main.temp.toFixed()}°C</h2>
            <h4 className="rotate-element">{weatherData.weather[0].main}</h4>
            <h4 className="weather-description">Description : {weatherData.weather[0].description}</h4>
            


          </div>
          <div className="bottom-side">
            <div className="feels-like">
              <h4>{weatherData.main.feels_like.toFixed()}°C</h4>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <h4>{weatherData.main.humidity}%</h4>
              <p>Humidity</p>
            </div>
            <div className="wind-speed">
              <h4>{weatherData.wind.speed.toFixed()} Kmph</h4>
              <p>Wind Speed</p>
            </div>
          </div> 
        </div>
      ) : <div className="error-message">Note : Enter valid location</div>}
    </div>
  );
}


 