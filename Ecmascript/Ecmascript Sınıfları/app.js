// Syntactic Sugar 

// function Employee (name,age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showINfos = function(){
//     console.log( " İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }

// const emp = new Employee ("Ömer",25,4000);

// console.log(emp);


class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log( " İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("Ömer",25,4000);
// console.log(emp);

emp.showInfos();