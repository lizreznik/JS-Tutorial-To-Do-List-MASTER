// CODE EXPLAINED channel
const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");


const list = document.getElementById("list");


const input = documnt.getElementById("input");


//insertAdjacentHTML()
const element = document.getElementById("element");
// syntax: 


// add a to-do
const CHECK ="fa-check-circle"; 
const UNCHECK = "fa-circle-thin"; 
const LINE_THROUGH = 'lineThrough'; 

function addToDo(toDo, id, done, trash) {

if(trash){ return; }

const DONE = done ? CHECK : UNCHECK;
const LINE = done ? LINE_THROUGH : "";




    const text = `<li class="item"> 
<i class="fa ${DONE} complete" job="complete"> id="${id}" </i>
<p class="text ${LINE}"> ${toDo} </p>
<i class="fa fa-trash-o delete" job="delete"> id="${id}" </i>
</li>`; 
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}
addToDo("Drink Coffee");

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo,id, false, false); 
            LIST.push(
                { 
                    name : toDo, 
                    id : id, 
                    done : false, 
                    trash : false
                }
            );
                input.value = "";
        }
    }
});

// store a to do 
let LIST = [];
let id = 0;
LIST = [{}, {}, ...];
LIST[0] ->
{
    name: "Drink Coffee",
    id: 0,
    one: false,
    trash: false
}

LIST[1] ->
{
    name: 'Wrokout',
    id: 1,
    done: true,
    trash: false
}

// to-do is Done. (end of day 1 18:09 on video)
element.classList.toggle(CLASS)

function completeToDo(element){
    element.classList.toggle(CHECK); 
    element.classList.toggle(UNCHECK); 
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH); 
    LIST[element.id].done = LIST[element.id].done ? false : true; 
}

// remove a to-do
function removeToDo(element){ 
    element.parentNode.parentNode.removeChild(element.parentNode); 
    LIST[element.id].trash = true; 
}
 
// target element created dynamically 
const list = document.getElementById("list"); 
list.addEventListener("click", function(event) {
    let element = event.target; //<i class="de fa fa-trash-o" job="delete" id="0"></i> 
    const elementJOB = event.target.attributes.job.value; // delete or complete 
    if (elementJOB == "complete"){
        completeToDo (element); 
    }else if(elementJOB == "delete"){
        removeToDo(element); 
    }
}); 
// save to-do-list to localStorage. 
localStorage.setItem('key', 'value'); 
let variable = localStorage.getItem('key'); 
localStorage.setItem("TODO", JSON.stringify(LIST)); 


// restore to-do-list from localStorage. 
let data = localStorage.getItem("TODO"); 
if (data){
    LIST = JSON.parse(data); 
    loadToDo(LIST); 
    id = LIST.length; 
}else{
    LIST = []; 
    id = 0; 
}
function loadToDo(array){ 
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash); 
    })
}
// clear localStorage.

;