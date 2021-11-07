const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
   'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const dateBuilder = (d) => {
   const date = new Date(d * 1000);
   const day = days[date.getDay()];
   const currentDate = date.getDate();
   const month = months[date.getMonth()];
   return `${day} , ${currentDate} ${month} `
}

export const dayBuilder = (d) => {
   const date = new Date(d * 1000);
   const day = days[date.getDay()];
   return `${day} `
}