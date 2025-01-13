let value; 

const programmer = {
    name : "Ömer Höbek",
    Age : 24,
    email : "omerhobek@gmail.com",
    langs : ["Matematik", "Fen", "Sosyal"],
    address : {
        City  : "Kahramanmaraş",
        street : "Onikişubat",
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value= programmer;
value= programmer.email;   // genel olarak kullanılan 
value = programmer["email"];


value=programmer.langs;

value= programmer.address.City;


programmer.work();



const programmers = [
    {name : "Ömer Höbek", age:24 },
    {name: "oguz", age:25}
];


value= programmers[0].name;

console.log(value);