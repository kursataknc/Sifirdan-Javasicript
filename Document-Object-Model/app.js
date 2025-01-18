// Window object
// let value;

// value=document;
// value=document.all
// value=document.all.length;
// value=document.all[0];
// value= document.all[6];
// value= document.all[document.all.length-1];

// const elements = document.all;  // Html colection
// for(let i = 0;  i<elements.length;i++){
//     console.log(elements[i]);
// }


// elements.forEach(function(element){
//     console.log(element);
// });

// const collections = Array.from(document.all);

// collections.forEach(function(collections){
//     console.log(collections);
// })



// value = document.body;
// value = document.head;
// value = document.location;
// value= document.location.hostname;
// value = document.location.port;

// value = document.URL;
// value = document.characterSet;

// console.log(value);




// let value;
// value = document;
// //Scriptler 

// value = document.scripts;
// value= document.scripts.length;
// value = document.scripts[0];

// //Linkler 

// value = document.links;
// value= document.links[0];
// value= document.links[document.links.length-1];
// value = document.links[document.links. length -1].getAttribute("class");
// value = document.links[document.links. length -1].getAttribute("href");
// value = document.links[document.links. length -1].className;
// value = document.links[document.links. length -1].classList;


// // Formlar 
// value = document.forms;
// value= document.forms.length;
// value = document.forms[0];
// value = document.forms[document.forms.length -1];
// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");
// value = document.forms[0].method;




// console.log(value);







// //Elementi Id'ye göre seçme 
// let element;

// element = document.getElementById("todo-form");
// element = document.getElementById("tasks-title");


// //Elementi class'a göre seçme 
// element = document.getElementsByClassName("list-group-item")[0];
// element = document.getElementsByClassName("card-header");

// // Element Tag' a göre seçme 
// element = document.getElementsByTagName("li");
// element = document.getElementsByTagName("div")[5];

// // Query Selector - Css selector - tek bir element 

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");
// element = document.querySelector(".list-group-item");

// element= document.querySelector("li");
// element = document.querySelectorAll("div");


// // QuerySelectorAll  - Tüm elementleri seçme 
// element = document.querySelectorAll(".list-group-item");
// element.forEach(function(el){
//     console.log(el);
// });



// console.log(element);




// const element = document.querySelector("#clear-todos");

// Element Özellikleri 
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList[0]);
// console.log(element.textContent);  // içinde yazılan yazıyı verir.
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);
// console.log(element);

// Style ve Element Özellikleirni Değiştirme 
// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";


// element.textContent= "Silin";

// element.innerHTML = "<span style= 'color:green'>Silin </span>";

// console.log(element);



//Li leriseçme 
// const element = document.querySelectorAll(".list-group-item"); // node list 

// element.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// })
// console.log(element);


// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li: nth-child(3)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// // yine forEach ile üzerinde istediğimiz gibi gezebiliriz. 
// console.log(element2);



// Dom Üzerinde gezme 

// let value;

// const todolist = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(3)");
// const cardrow = document.querySelector(".card.row");


// value = todolist;
// value = todo;
// value = cardrow;

// // child Nodes - Text ide alır 
// value = todolist.childNodes;
// value = todolist.childNodes[0]; // satırlarıda sayar 

// // Children - Element
// value = todolist.children;
// value = todolist.children[2];
// value = todolist.children[todolist.children.length - 1];
// value = todolist.children[2].textContent = "Değişti";



// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "Burası da dğişti";

// value = todolist;
// value = todolist.children[0];
// value = todolist.firstElementChild;
// value = todolist.lastElementChild;
// value = todolist.children.length;
// value = todolist.childElementCount;



// value = cardrow;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;

// // Element kardeşlerini bulma 
// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;
// value = todo.previousElementSibling.previousElementSibling;

// console.log(value);



// Dinamik ELement oluşturma 

// yeni element oluşturms 
/*{ <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> */

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];
// newLink.id = "clear-todos";
// newLink.className="btn btn-dark";
// newLink.href="https://www.google.com.tr";
// newLink.target="_blank";


// // text content 
// // newLink.textContent="Farklı Sayfaya Git";

// // Text Node

// // const text = document.createTextNode("Naber");  // elementin sonuna yazı yazdırmayı yarar 
// // cardbody.appendChild(text);

// newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

// cardbody.appendChild(newLink);




// console.log(newLink);

// Dinamik element silme

// const todolist=document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");


// // Remove Metodu 
// // todos[0].remove();  // 1. todo silinmiş oldu 
// // todos[1].remove();  // 2. todo silinmiş oldu 

// //Remove Child

// // todolist.removeChild(todolist.lastElementChild); // son çocuk silindi 
// todolist.removeChild(todos[3]);  // son çocuk silindi yine 






// console.log(todolist);


// Elementleri birbirleriyle değiştirme 
// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent= "Yeni Todolar";

// // Eski element 
// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement,oldElement);



// console.log(cardbody);


// const todoInput = document.getElementById("todo");

// Element=todoInput;
// Element=todoInput.classList;

// // todoInput.classList.add("newClass");
// // todoInput.classList.add("newClass2");
// // todoInput.classList.remove("form-control");  // form-controlü sildik 


// Element = todoInput;
// Element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Naber");


// Element=todoInput;
// console.log(todoInput);












