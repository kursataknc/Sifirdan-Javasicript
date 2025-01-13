// While döngüleri 
// let i=0

// while(i < 10){  // sonsuz  döngü 
//     console.log(i);
//     i++;
// }

// let i =10
// while (i >0){
//     console.log(i);
//     // i--;  // i -=1 aynı şeyi yapar 

//     i-=2;
// }


// Break ve Continue
// let i=0

// while(i < 10){  // sonsuz  döngü 
//     console.log(i);
//     if(i==5){
//         break;  // dögüyü sonlandırır
//     }
//     i++;
// }

// let i = 0;
// while (i<10){
//     if (i == 3 || i == 5){
//         i++;
//         continue;  3 ve 5 i es geçmiş olduk 
//     }
//     console.log(i);
// }

//Do while 
// let i = 0;
// do {
//     console.log(i);
//     i++;

// }while (i<10);

const langs = ["Matematik", "Sos", "Fen"];

// let index=0;

// while(index < langs.length){
//     console.log(langs[index]);
//     index++;
// }


// for (let index=0;index<langs.length;index++){
//     console.log(langs[index]);
// }


// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });

// const users= [
//     {name:"Ömer", age: "24"},
//     {name:"Hacı", age: "40"},
//     {name:"Ali", age: "12"}

// ];

// const names= users.map(function(users){
//     return users.name;
// });

// const ages= users.map(function(users){
//     return users.age;
// });
// console.log(names);
// console.log(ages);


const user= {
    name: "Ömer",
    age: 24
};

for(let key in user){
    console.log(key,user[key]);
}
