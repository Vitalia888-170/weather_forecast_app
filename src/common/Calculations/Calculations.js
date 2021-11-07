export const convertPressure = (pres) => {
   return Math.floor(pres / 1.333);
}
export const convertTemp = (value) => {
   return Math.floor(value - 273.15);
}
export const time = (data) => {
   let time = new Date(data * 1000);
   let hour = time.getHours();
   return hour;
}