// console.log(this);  //  Global scope

// const emp1 = {  // Object Literal
//     name : "Ömer",
//     age: 24,
//     showInfos: function(){console.log("Bilgiler Gösteriliyor");}
// };

// const emp2 = {
//     name : "Ahmet",
//     age : 25
// };
// emp1.showInfos();
// emp1.salary = 4000;

// console.log(emp1);


function Employee(name,age,salary){ // Yapıcı Fonksiyon - Constructor
    this.name= name;
    this.age = age;
    this.salary=salary;
    // console.log(this);  yazılan tüm özlellikleir çalıştırır

    this.showInfos= function(){
        console.log(this.name,this.age,this.salary);
    }
}


const emp1 = new Employee("Ömer",24,4000);
const emp2 = new Employee("Ahmet",25,5000);

emp1.showInfos();
emp2.showInfos();