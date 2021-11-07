export const selectTheme = (hours, themes) => {
   if (hours >= 6 && hours < 10) {
      return themes[0];
   } else if (hours >= 10 && hours < 17) {
      return themes[1];
   } else if (hours >= 17 && hours < 19) {
      return themes[2];
   } else if (hours >= 19 && hours < 21) {
      return themes[3];
   } else {
      return themes[4];
   }
}
