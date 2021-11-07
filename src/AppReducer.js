import morning from './images/themes/morning.jpg';
import day from './images/themes/day.jpg';
import evening from './images/themes/evening.jpg';
import night from './images/themes/night.jpg';
import lateEvening from './images/themes/late-evening.jpg';

export const initialState = {
   themes: [morning, day, evening, lateEvening, night],
   isLoading: false,
   currentUser: null,
   dailyCurrentWeather: null,
   location: null,
   errorMessage: null
}

export const AppReducer = (state, action) => {
   switch (action.type) {
      case 'SET_WEATHER_DATA':
         return {
            ...state,
            weather: action.data
         };
      case 'SET_CURRENT_DAILY_DATA':
         return {
            ...state,
            dailyCurrentWeather: action.data
         };
      case 'SET_LOCATION':
         return {
            ...state,
            location: action.data
         }
      case 'CURRENT_USER':
         return {
            ...state,
            currentUser: action.user
         };
      case 'IS_LOADING':
         return {
            ...state,
            isLoading: action.value
         };
      case 'SET_ERROR_MESSAGE':
         return {
            ...state,
            errorMessage: action.msg
         };
      default:
         return state;

   }
}


