//Karşılaştırma Operatörleri 

//==  iki durumun eşitliğinden bahseder 
//=== iki durumun hem değerine hemde stilini karşılaştırır 
//!=
//!==
//>
//<
//>=
//<==



// console.log(2 == 2);
// console.log("js"=="java");

// console.log(2=="2");
// console.log(2==="2"); // 2 number iken "2" string olduğundan sonuç false verir 


// console.log(4>2);
// console.log(4<2); 
// console.log(2!=4);  // 2 dörde eşit değilmidir diye sorar ve sonuç doğru ise true yanlış ise false verir 
// console.log(2!=2);  // 2 ikiye eşit değilmidir sorulduğunda cevap yanlış olduğundna false aldı. 

// console.log(2<4);  

// console.log(4>=2);  // büyük eşitti mevzusunda doğru ise true yanlış ise false alır. 

// console.log(2 <=4);  // küçük eşittirde aynı mantıkla çalışır. 

// Mantıksal bağlaçlar 
//Not Operatörü 
// console.log(!(2 ==2));  //olumsuz durumu almış olduk iki eşittir ,k,ye true iken biz false çevirmiş olduk. 
// console.log(!(2 !=2));  // olumsuzun olumsuzunu alırsak yine kendisini verir ve true çevrilmiş olur

// And operatörü 

// console.log( ( 2 == 2) && ("Ahmet"=="Ahmet"));   // eğer içeride yazılan ifadelerden birisi bile doğruysa tüm sonuç doğru olur.  && ve bağlacı 
// console.log( ( 4 == 2) && ("Ahmet"=="Ahmet"));   // eğer içeride yazılan ifadelerden birisi bile yanlışsa tüm sonuç yanlış olur.


//Or operatörü 

// console.log((4==2) || ("Ahmet"=="Ahmet"));  // en az bir tanesi doğruysa true   || or bağlacı 
// console.log((4==2) || ("Ahmet"!="Ahmet"));  // ikiside yanlış ise false olur

// const error = false; 
// if (error == true){
//     console.log("Hata oluştu")
// }
// else {
//     console.log("Hata oluşmadı.")

// };

// const user = "ttd";
// if (user=== "mmc"){
//     console.log("kullanıcı bulundu");
// }
// else {
//     console.log("Böyle bir kullanıcı yok.")
// };


// const process = "7";

// if (process === "1") {
//     console.log("İşlem 1 ");
// }
// else if (process === "2") {
//     console.log("İşlem 2");
// }
// else if (process === "3") {
//     console.log("İşlem 3");
// }
// else {
//     console.log("Geçersiz İşlem");
// }



// const number = 100;

// if (number===100){
//     console.log("Sayı 100' e eşit");
// }
// else {
//     console.log("Sayı 100'e eşit değil");
// }

// ternary Operatörü 

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil");

// if (number === 100) console.log("Sayı 100");  // tek bir değişkende if kullanıyorsak küme parantezi açmaya gerek kalmıyor .
// else console.log("Sayı 100 Değil");


// Switch case 

// const process = "2";

// if (process === "1") {
//     console.log("İşlem 1 ");
// }
// else if (process === "2") {
//     console.log("İşlem 2");
// }
// else if (process === "3") {
//     console.log("İşlem 3");
// }
// else {
//     console.log("Geçersiz İşlem");

// }

const process =2;

switch (process) {
    case 1:
        console.log("İşlem 1");
        break;  // switch case den çık demek . eğer yazmaksak alttaki satırıda ki koşuluda alır. 
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default : 
    console.log("Geçersiz İşlem");
    // burada break yazmasakta olur zaten koşulun son satırını oluşturuyor. 
    





}






