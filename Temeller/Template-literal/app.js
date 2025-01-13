const name = "Ömer";
const department = "Öğretmen";
const salary = 4000;



// const a = "İsim:"+ name+ "\n"+ "Departman:"+ department+"\n"+"Maaş:"+ salary;

// const a= `İsim:${name}\nDepartman:${department}\nMaaş:${salary}\n`   //\n alt satıra geç demek 
// const html = "<ul>" +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</ul>";

const html=`
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10/4}</li>

</ul>
`;

document.body.innerHTML = html;
console.log(a);
