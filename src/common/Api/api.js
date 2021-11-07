const axios = require('axios');
export const api = {
   key: "84096f04c41e1eb7fbc15eaeb5027d70",
   url: "https://api.openweathermap.org/data/2.5/"
}

export const weatherAPI = {
   getUsersCoordsData(city, country = '') {
      return axios.get(`${api.url}weather?q=${city},${country}&appid=${api.key}`)
         .then(res => res.data)

   },
   getCurrentWeather(lat = '', lon = '') {
      return axios.get(`${api.url}onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api.key}`)
         .then(res => res.data)
   }
}

