import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context';
import { convertTemp, convertPressure } from '../../common/Calculations/Calculations';
import { generateIconWeather } from '../../common/WeatherIcons/GenerateIcons';
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FiCloudRain, FiCloud, FiWind } from "react-icons/fi";
import { Line } from 'react-chartjs-2';
import { dateBuilder, dayBuilder } from '../../common/DateBuilder/DateBuilder';
import { Header } from './Header';
import { Chart } from './Chart';
import { useHistory } from 'react-router';


export const DailyWeather = ({ currentWeather}) => {
   const { dailyCurrentWeather,  errorMessage, location } = useContext(AppContext);
   const [dayIndex, setDayIndex] = useState(0);
   useEffect(() => {
      localStorage.setItem('weather', JSON.stringify(dailyCurrentWeather));
   }, []);
   let history = useHistory();

   const weekWeather = currentWeather.slice(0, 7);
   const { rain, clouds, humidity, pressure, wind_speed, weather, temp, dt } = currentWeather[dayIndex];
   
      return (
         <section className="daily-container">
            <Header weather={currentWeather} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="daily-weather">
               <div className="day-card">
                  <h4>{dateBuilder(dt)}</h4>
                  <div className="day__content">
                     <div className="day-details">
                        <h5 className="desc">{weather[0].description}</h5>
                        <div className="day-details__item">
                           <FiCloudRain className="day-details-icon" />
                           <h5>Rain:</h5>
                           <p>{rain ? rain : "0"} mm</p>
                        </div>
                        <div className="day-details__item">
                           <FiCloud className="day-details-icon" />
                           <h5>Clouds:</h5>
                           <p>{clouds} %</p>
                        </div>
                        <div className="day-details__item">
                           <WiHumidity className="day-details-icon" />
                           <h5>Humidity:</h5>
                           <p>{humidity} %</p>
                        </div>
                        <div className="day-details__item">
                           <WiBarometer className="day-details-icon" />
                           <h5>Pressure:</h5>
                           <p>{convertPressure(pressure)} mmhg</p>
                        </div>
                        <div className="day-details__item">
                           <FiWind className="day-details-icon" />
                           <h5>Wind:</h5>
                           <p>{wind_speed}mm/s</p>
                        </div>
                     </div>
                     <div className="day-icon">
                        <img className="weather-icon-current" src={generateIconWeather(weather[0].id, weather[0].icon)} alt={weather[0].id} />
                        <div className="chart">
                           <Line data={Chart(temp)} />
                        </div>
                     </div>
                  </div>
               </div>
   
               <div className="weather-daily-block">
                  {
                     weekWeather.map((day, index) => {
                        return <div key={index} className="daily-data-item" onClick={() => setDayIndex(index)}>
                           <h4 className="daily-data-title">{dayBuilder(day.dt)}</h4>
                           <div className="daily-data-content">
                              <h4>{convertTemp(day.temp.day)}&deg;</h4>
                              <img className="weather-icon" src={generateIconWeather(day.weather[0].id, day.weather[0].icon)} alt={day.weather[0].id} />
                           </div>
                        </div>
                     })
                  }
               </div>
            </div>
         </section>
      )
}
