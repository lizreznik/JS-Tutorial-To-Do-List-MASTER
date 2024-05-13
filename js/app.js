// CODE EXPLAINED channel
const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");


const list = document.getElementById("list");


const input = documnt.getElementById("input"); 

//insertAdjacentHTML()
const element = document.getElementById("element"); 
// syntax: 


// add a to-do
function addToDo (toDo){ 
const text = `<li class="item"> 
<i class="co fa fa-circle-thin" job="complete"></i>
<p class="text"> Drink Coffee </p>
<i class="de fa fa-trash-o" job="delete"> </i>
</li>`
const position = "beforeend"; 
list.insertAdjacentHTML(postion, text); 
}
addToDo("Drink Coffee"); 