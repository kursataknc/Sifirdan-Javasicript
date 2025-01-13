let value;

// veri tiplerini Stringe Çevirme 

value=String(123);   // value=(10).toString(); aynı işlemi yapar 
value=String(3,14);
value=String(true);
value=String(false);
value=String([1,2,3,4,5])


// Veri tiplerini Sayılara Çevirme 
value= Number("123");
value=Number(null);
value=Number("Hello World");  // çeviremediğimiz için NaN yazar 
value=Number(function(){console.log()});  // fonksiyonlarda numaraya çevrilmediği için NaN uyarısı aldı 
value=Number([1,2,3]);  // yine çeviremediğinden NaN uyarısı aldı NaN= Not a Number demek 
value=Number("3.14");
value=parseFloat("3.14");
value=parseInt("3");




// const a = "Hello" + 34;    //stringleri birleştirerek yazdı  Hello34
// console.log(a); 
// console.log(typeof a);

const a = Number ("34")+53; // sayıları toplamış oldu 
console.log(a);
console.log(typeof a );



console.log(value);
console.log(typeof value);  


