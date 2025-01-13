// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name="Ömer";
// console.log(object);

// function Employee(name,age){
//     this.name = name;
//     this.age=age;

//     this.showInfos = function(){
//         console.log("Bilgiler YÜkleniyor...")
//     }
//     this.toString = function(){
//         console.log("Bu Bir Employee Ojesi")
//     }
// }

// const emp1 = new Employee("Ömer",24);
// console.log(emp1);

// console.log(emp1.toString()); 



function Employee(name,age){
    this.name = name;
    this.age = age;

}

Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " + this.age );
}


const emp1 = new Employee("Ömer",25);
const emp2 = new Employee("Ahmet",24 );


emp2.showInfos();
console.log(emp1);
console.log(emp2);