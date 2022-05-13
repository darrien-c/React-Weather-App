import React, { useState} from 'react';
import axios from 'axios';

import WeatherForecast from './components/WeatherForecast';
import DailyWeather from './components/DailyWeather';

import './styles.scss';



const URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather'; 
const API_KEY = 'e07d6ec2285b805cff438c64609e3a00';

const App = () => {

    const [error, setError] = useState('');

    // fetch daily weather with one parameter with the name of the city that's being searched
    const fetchWeather = async (query) => {    

        // Get the response once a call is being made to URL with the API
        const { data } =  await axios.get(URL, {
            params: {
                q: query,
                units: 'metric', 
                APPID: API_KEY,
            }
        });
        return data;
    }


    // fetch forecast data with one parameter with the name of the city that's being searched
    const fetchForecast = async ( query ) => {    

        const forecast = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${API_KEY}&units=metric`; 

        // Get the response once a call is being made to forecast with the API   
        try {
            const { data } =  await axios.get(forecast, {
            
                    params: {
                        q: query,
                        APPID: API_KEY,
                    }                   
                })  
                return data; 
            }  
            catch(error) {
                let responseData = '';
                if(error.request) {         
                    responseData = "Oops! Unable to find city, please try again!"; 
                    setError(responseData);                 
                } else if (error.request) {    
                    responseData = "Oops! Unable to find city, please try again!"; 
                    setError(responseData); 
                } else {           
                    responseData = "Oops! Unable to find city, please try again!"; 
                    setError(responseData);
                }
                return error;  
            };  
        }

        // initiate query as an empty string
        const [query, setQuery] = useState('');
        const [latitude, setLatitude] = useState('');
        const [longitude, setLongitude] = useState('');
        const [isLoading, setIsLoading] = useState(true);
        const [forecasts, setForecast] = useState([]);

        // initiate weather as an empty objet
        const [weather, setWeather] = useState([]);

        const fetchSearch = async (e) => {          
    
            //If the pressed key is equal to enter
            if(e.key === 'Enter' ) {   

                const data = await fetchForecast(query);  
                const dailyData = await fetchWeather(query); 
                console.log(e);
                // set the weather to be equal to the data that is received
                setForecast(data.list);  
                setWeather(dailyData);
                setLatitude(dailyData.coord.lat);
                setLongitude(dailyData.coord.lon);        
                setIsLoading(false);    

                //Reset query after 'Enter' is hit
                setQuery(''); 

                //Reset error after 'Enter' is hit
                setError('');
            }
        }      

 

    return (
        <div className="main-container">                  
                <h1>Weather app</h1>                
            <input 
                type="text"
                className="search"
                placeholder="Search a city..."
                value={query}    
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={fetchSearch}
            />  

            <h2 className="error-msg">{error}</h2>

            <div>
                <DailyWeather weather={weather} isLoading={isLoading} />
                <WeatherForecast isLoading={isLoading} forecasts={forecasts}  />   
            </div>

         </div>
    );
}

export default App;

