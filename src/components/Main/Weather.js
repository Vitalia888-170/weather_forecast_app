import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { ThemeContainer } from './ThemeContainer';
import { selectTheme } from '../../common/Calculations/SelectTheme';
import { DailyWeather } from './DailyWeather';
import { time } from '../../common/Calculations/Calculations';


export const Weather = ({ weather }) => {
   const { themes } = useContext(AppContext);
   let hour = time(weather[0].dt);
   return (
      <>
         <ThemeContainer image={selectTheme(hour, themes)}>
            <DailyWeather currentWeather={weather} />
         </ThemeContainer>
      </>
   )
}


