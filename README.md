## Weather forecast application :sun_behind_rain_cloud::closed_umbrella: \:rainbow:
This is a weather app, using which you can figure out weekly weather forecast.
You can see three different pages, which contain authorization, search and main pages.
### Authorization
I used functionality of Firebase Authentication, which help user sign out by creating his own account, when he entered to application at first, and sign in if he have already had an account.Login and logout in this app become very simple. But this is not all, magic hides under amazing smooth transition between sing in and sign out pages. For this I used Framer Motion.

### Search page
Here you can search required weather forecast , entering city you need. Or you can automatically get desired forecast when you will press a button called "Your location".
The function is triggered and it check out if navigator.geolocation is allowed in your browser and give you information about weather in your current location.
```javascript
const getCurrentLocation = () => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getCurrentLocationWeather(+lat.toFixed(2), +lon.toFixed(2));
         });
      } else {
         console.log("Geolocation is not supported by this browser.");
      }
   }
```
Or if it's not allowed, browser show you a little message about agreement and ask to confirm it.

### Data
I get data from [openweathermap.org](https://openweathermap.org/api). But the problems is openweathermap "One Call API". When you want to get weekly data you should use coordinates of city, but not a name of it. So there is another API for one day which give you a response where you have current day weather and also coordinates of this city. So I combine this two API call and force my application work. Although there is still one issue - when you get a data of weather from the server, the date based on "dt" does not work correctly, maybe it happens because of "One API Call" of openweathermap, which set some limits for my free plan.

### Weather page
Except weather forecast on the page you can notice that background changes together with hours: morning, day, evening, night and late night.

## Functionality:
- React
- React-router-dom
- Axios
- Firebase Authorization
- Formik
- Chart.js
- React-chartjs-2
- Framer-motion
- Styled-components
- React-icons
