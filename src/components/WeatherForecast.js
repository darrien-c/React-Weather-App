import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import  Slider  from "react-slick";



const WeatherForecast = ({forecasts, isLoading}) => {

    forecasts.sort(function(a, b){
        return b.dt_txt - a.dt_txt;
    })

    forecasts.length = 7; 

    /* const [ forecastDate, setForecastDate ] = useState('');
 */
    const convertForecastDate = ( forecastDate ) => {
        let date = new Date(forecastDate);
        let formattedDate = date.toISOString().split('T')[0];  
        return formattedDate;
    }

    const convertForecastTime = ( time ) => {
        let date = new Date(time);
        let timestr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return timestr;
    }

    const settings = {
        swipe: true,
        infinite: true,        
        adaptiveHeight: true,
        arrows: false,
        dots: true, 
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,   
      
       
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                infinite: true,
                dots: true
              }
            }
          ] 
      };


      console.log(forecasts);
    return (
    isLoading ? <p></p> :

        <section className="forecast-container">  
            <h2>Forecast</h2>             
            <div className="forecast-wrapper">     
                <Slider  {...settings} >     
                        {forecasts.map((forecast, i) => (     
                            <div key={i} className="forecast-card">  
                                <p>{convertForecastDate(forecast.dt_txt)}</p> 
                                <p>{convertForecastTime(forecast.dt_txt)}</p>                   
                                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}  alt={forecast.weather[0].description}/>
                                <p>{forecast.weather[0].description}</p>
                                <p>{Math.round(forecast.main.temp)}<sup>&deg;C</sup></p>
                              
                            </div>                           
                        ))}  
                </Slider>            
            </div>           
        </section> 
   
    )
}

export default WeatherForecast

