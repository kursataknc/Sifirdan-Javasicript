let value;


const value1 = 10;
const value2 = 4;
 
//Aritmetik operatörler
// value = value1+value2
// value = value1-value2
// value = value1*value2
// value = value1/value2
// value = value1%value2   // 10 un 4 ilebölümünden kalanı verir.

value=Math.PI;  //  pi sayısını verir
value=Math.E; // logaritma e tabanınn değerini veriri 
value = Math.ceil(3.2);   // en yakın tamlığa yuvarlar 
value = Math.ceil(3.5);
value = Math.ceil(3.7);

 value = Math.ceil(3.2); // tamd değer fonksiyon gibi üste yuvarlar 
 value = Math.ceil(3.7); // tamd değer fonksiyon gibi üste yuvarlar 

 value= Math.floor(3.7);  // bilr altındaki sayıya yuvarlar. 
 value= Math.floor(3.2);

value= Math.sqrt(16);   // sayının karekökünü alır 
value= Math.sqrt(31);

value= Math.abs(-10);  // sayının mutlak değerini alır.

value=Math.pow(8,3);  // sekizin üçüncü kuvveti alır 

value= Math.max(100,20,30,54);  // en büyük sayıyı seçer
value=Math.min(-11,-22,33,54);   // en küçük sayıyı seçer

value=Math.random();  // 0-1 arasında ondalıklı sayı üretir 

value=Math.random() * 20; // 0 - 20  arasında değerler verir yine ondalıklı olur 
value=Math.floor(Math.random() * 20); // 0 - 20  arasında tam sayı değerleri verir 
value=Math.floor(Math.random() * 20 + 1);  //  20 değerinide verir. 







console.log(value);