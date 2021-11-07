export const setUserCoords = (data) => {
   return {
      coord: {
         lon: data.coord.lon,
         lat: data.coord.lat
      }
   }
}
