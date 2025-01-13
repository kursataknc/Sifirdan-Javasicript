

let value;
// Şu anki zaman 

const now = new Date();

const date1= new Date("9-22-2000 05:17:00");

const date2= new Date("September 22 2000");
const date3= new Date("9/22/2000");

value= date1;
value = date1.getMonth();
value= date1.getDate();
value= date1.getDay();
value= date1.getMinutes();
value = date1.getHours();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1999);
date1.setHours(7);
date1.setSeconds(13);
date1.setMilliseconds(25);


value = date1;







console.log(value);