import { convertTemp } from "../../common/Calculations/Calculations";


export const Chart = (temp) => {
   const Chartdata = {
      labels: ["morn", "day", "even", "night"],
      datasets: [{
         data: [convertTemp(temp.morn), convertTemp(temp.day), convertTemp(temp.eve), convertTemp(temp.night)],
         borderColor: 'rgba(5, 95, 173, 0.705)',
         label: 'temperature',
         fill: false,
         tension: 0.1
      }]
   }
   return Chartdata;
};