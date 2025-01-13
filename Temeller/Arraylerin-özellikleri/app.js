let value;

const numbers = [45, 46, 52, 58, 21, 2];

// const numbers2 = new Array(1,2,3,4,35,6,7)

const langs = ["Matematik", "Fen", "Sosyal"];
const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers.length; // eleman sayısı verir 
// İndekslenme
value = numbers[0];
value = numbers[5];
value = numbers[numbers.length - 1];

//herhangi bir indeksteki değeri değiştirme 
numbers[2] = 1000
value = numbers;

//index of

value = numbers.indexOf(1000);


//Arrayin sonuna değer ekleme - push 
numbers.push(2000); // sonuna değer atar 
value = numbers;
numbers.unshift(3000);  // başına değer atar 
value = numbers;


// sonundan değer atma 
numbers.pop();  // sondaki 2000 değerini attı 

value = numbers;

numbers.shift();

value = numbers; // baştaki 3000 değerini attı 

// belli bir kısmını atma 

numbers.splice(0, 3);
value = numbers;

// tersten sıralama yapar 
numbers.reverse();
value = numbers;


value = numbers.sort();  //  ilk rakamlara göre sıralama yapar 

value = numbers.sort(function(x,y){
    // küçükten büyüğe sıralama 
    return x - y ;
});

value= numbers.sort(function(x,y){
    return y - x
});  // büyükten küüçüğe doğru sıralama yöntemi 


console.log(value);