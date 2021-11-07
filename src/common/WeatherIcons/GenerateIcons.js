import thunder from '../../images/weather-icons/thunder.svg';
import cloudy from '../../images/weather-icons/cloudy.svg';
import cloudy1 from '../../images/weather-icons/cloudy-day-1.svg';
import cloudy2 from '../../images/weather-icons/cloudy-day-3.svg';
import clearDay from '../../images/weather-icons/day.svg';
import rainy1 from '../../images/weather-icons/rainy-1.svg';
import rainy2 from '../../images/weather-icons/rainy-5.svg';
import rainy3 from '../../images/weather-icons/rainy-6.svg';
import snowy1 from '../../images/weather-icons/snowy-1.svg';
import snowy2 from '../../images/weather-icons/snowy-6.svg';
import night from '../../images/weather-icons/night.svg';
import cloudyNight from '../../images/weather-icons/cloudy-night-3.svg';

export const generateIconWeather = (icon, q) => {
   if (q === '01n') {
      return night;
   }
   if (q.includes('n')) {
      return cloudyNight;
   }
   if (icon >= 200 && icon <= 232) {
      return thunder;
   }
   if (icon >= 300 && icon <= 321) {
      return rainy2;
   }
   if (icon >= 500 && icon <= 504) {
      return rainy1;
   }
   if (icon >= 511 && icon <= 531) {
      return rainy3;
   }
   if (icon >= 600 && icon <= 615) {
      return snowy1;
   }
   if (icon >= 616 && icon <= 622) {
      return snowy2;
   }
   if (icon === 800) {
      return clearDay;
   }
   if (icon >= 801 && icon <= 802) {
      return cloudy1;
   }
   if (icon >= 803 && icon <= 804) {
      return cloudy2;
   }
   if (icon >= 701 && icon <= 781) {
      return cloudy;
   }

}

