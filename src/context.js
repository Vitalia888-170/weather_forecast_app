import { createContext, useReducer } from 'react';
import { auth } from './firebase';
import { AppReducer, initialState } from './AppReducer';
import { weatherAPI } from './common/Api/api';
import { setUserCoords } from './common/Calculations/WeatherDataConverter';

export const AppContext = createContext();

export const Provider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   const userSignup = (email, password) => {
      return auth.createUserWithEmailAndPassword(email, password).then(res=>{
         setErrorMessage(null);
      })
   }
   const userSignin = (email, password) => {
       auth.signInWithEmailAndPassword(email, password)
       .then(res=>{
         setErrorMessage(null);
       }).catch(e=>{
         setErrorMessage(e.message);
         console.log('error firebase:' + e.message);
      })
   }

   const userLogout = () => {
      return auth.signOut();
   }


   const getUserEnteredWeather = async (city) => {
      try {
         setIsLoading(false);
         setErrorMessage(null);
         let data = await weatherAPI.getUsersCoordsData(city);
         setLocation(data.name, data.sys.country);
         let location = setUserCoords(data);
         await getCurrentLocationWeather(location.coord.lat, location.coord.lon);
         setIsLoading(true);
      } catch (error) {
         setErrorMessage("You enter invalid city name. Try again");
         console.log(error);
      }
   }

   const getCurrentLocationWeather = async (lat, lon) => {
      try {
         setIsLoading(false);
         let data = await weatherAPI.getCurrentWeather(lat, lon);
         setDailyWeather(data.daily);
         setIsLoading(true);
      } catch (error) {
         console.log(error);
      }
   }




   const setWeather = (data) => {
      dispatch({ type: 'SET_WEATHER_DATA', data });
   }
   const setIsLoading = (value) => {
      dispatch({ type: 'IS_LOADING', value });
   }
   const setCurrentUser = (user) => {
      dispatch({ type: 'CURRENT_USER', user });
   }
   const setDailyWeather = (data) => {
      dispatch({ type: 'SET_CURRENT_DAILY_DATA', data });
   }
   const setLocation = (city, country) => {
      dispatch({ type: 'SET_LOCATION', data: { city, country } });
   }
   const setErrorMessage = (msg) => {
      dispatch({ type: 'SET_ERROR_MESSAGE', msg:msg });
   }



   const value = {
      getUserEnteredWeather,
      getCurrentLocationWeather,
      userSignup,
      userSignin,
      setWeather,
      userLogout,
      setCurrentUser,
      setErrorMessage,
      setDailyWeather,
      setLocation,
      ...state
   }
   return (
      <AppContext.Provider value={value}>
         {children}
      </AppContext.Provider>
   )
}