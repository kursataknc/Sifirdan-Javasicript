// Destructing

// let number1, number2;

// arr = [100,200,300,400];

// number1=arr[0];
// number2=arr[1];

//Destructing

// [number1,number2] = arr;

// const[number1,number2] = arr;

// console.log(number1,number2); 



// Obje destructing 

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
// };
// const {a,b,d}= numbers;
// console.log(a,b,d);


// Function Destruction

// const getLangs = () => ["Phyton","java","C++"];

// const [lang1, lang2,lang3]= getLangs();
// console.log(lang1,lang2,lang3);

const person = {
    name: "Ömer",
    year: 2000,
    salary: 4000,
    showInfos: () => console.log("Bilgiler Gösteriliyor...")
}

const { name: isim, year: yıl, salary: maas, showInfos: bilgileriGoster } = person;

console.log(isim, yıl, maas);
bilgileriGoster();