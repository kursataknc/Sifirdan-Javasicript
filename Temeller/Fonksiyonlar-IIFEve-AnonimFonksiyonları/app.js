// // Fonksiyon Tanımlama 

// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
    
//     // if(typeof name === "undefined") name = "Bilgi Yok";
//     // if(typeof age === "undefined") age = "Bilgi Yok";
    
//     console.log(`İsim : ${name} Yaş: ${age}`);
// }

// merhaba("Ömer",24);  // Fonksiyon çağırısı ( Function call)

// merhaba("Ayşe",30);

// merhaba(); 


// merhaba ( "Kadir");


// function square(x){
//     return x*x ;

//     console.log("Naber") // return yazdığımız için bu gözükmez 
// }
// function cube(x){
//     return x*x*x;
// }

// let a = cube(square(12));


// console.log(a);
 
// function merhaba(){
//     return "merhaba";
// }

// console.log(merhaba());


//Function Expression

// const merhaba  = function(name){
//     console.log("merhaba" + name);
// }

// merhaba("ömer");



//Immediately Invoked Function  Expression 

// (function(name){
//     console.log("Merhaba:" + name);
// }) ("ömer");


const datebase = {
    host: "localhost",
    add: function (){
        console.log("Eklendi");
    }, 
    get: function(){
        console.log("Elde Edildi");
    },
    update: function(id){
        console.log(` Id: ${id} GÜncellendi`);
    },
    delete: function(id){
        console.log(` Id: ${id} Silindi`);
    }
}

console.log(datebase.host);
datebase.add();

datebase.delete(10);
datebase.update(5);