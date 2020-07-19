import React from 'react'




const DailyWeather = ( {weather,  isLoading} ) => {


    const currentDate = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const todaysMonth   = months[currentDate.getMonth()];
    const todaysDay     = days[currentDate.getDay()];
    const todaysDateNum = currentDate.getDate();
    const todaysYear    = currentDate.getFullYear();

    const todaysDate = todaysDay + " " + todaysMonth + " " + todaysDateNum + "," + " " +todaysYear;


    const convertTimestamp = (time) => {
        let date = new Date(time * 1000);
        let timestr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return timestr;
    } 


    return (

     <section  id="weather-app">   
        {weather.main && (

            <div className="weather-container">
                <div className="city-heading">
                    <h2 className="city-name">{weather.name}, {weather.sys.country} </h2> 
                    <h3 className="city-date">{todaysDate}</h3>
                </div>
   
            <div className="weather-app">
                 <div className="city">
                    <div className="city-info">
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <h4>{weather.weather[0].description}</h4>
                        </div>
                        <div className="city-weather">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  alt={weather.weather[0].description}/>
                         
                        </div>
                    </div>
                </div> 
                
                <div className="extra-info">
                    <div className="extra-box">
                        <h4>{Math.round(weather.main.temp_max)} <sup>&deg;C</sup></h4>
                        <h4>High</h4>
                    </div>
                    <div className="extra-box">
                        <h4>{weather.main.humidity}</h4>
                        <h4>Humidity</h4>
                    </div>
                    <div className="extra-box">
                        <h4>{weather.wind.speed}</h4>
                        <h4>Wind</h4>
                    </div>
                    <div className="extra-box">
                        <h4>{Math.round(weather.main.temp_min)} <sup>&deg;C</sup></h4>
                        <h4>Low</h4>
                    </div>

                    <div className="extra-box">
                        <h4>{convertTimestamp(weather.sys.sunrise)}</h4>
                        <h4>Sunrise</h4>
                    </div>
                    <div className="extra-box">
                        <h4>{convertTimestamp(weather.sys.sunset)}</h4>
                        <h4>Sunset</h4>
                    </div>
                </div>
            </div>
        </div>
            )}   

      </section>
    )
}

export default DailyWeather