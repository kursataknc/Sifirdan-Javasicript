// Setler - Kümeler 

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("ömer");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});


const myset2= new Set([100,3.14,"ömer"])
// console.log(myset);
// console.log(myset2);

// size

// console.log(myset.size);


// Delete Metodu 

// myset.delete("ömer");

// Has metodu o değeri olup olmadığına bakar 

// console.log(myset.has("ömer"));
// console.log(myset.has(3.14));
// console.log(myset.has(20));
// console.log(myset.has([1,2,3]));

//For Each

// myset.forEach(function(value){
//     console.log(value);
// })


// For of döngüsü 

// for (let value of myset){
//     console.log(value);
// }


// Arrayi sette oluşturma 

const array = Array.from(myset);

console.log(array);