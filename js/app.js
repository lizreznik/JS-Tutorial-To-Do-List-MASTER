// CODE EXPLAINED channel
const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");


const list = document.getElementById("list");


const input = documnt.getElementById("input");


//insertAdjacentHTML()
const element = document.getElementById("element");
// syntax: 


// add a to-do
function addToDo(toDo) {
    const text = `<li class="item"> 
<i class="co fa fa-circle-thin" job="complete"></i>
<p class="text"> Drink Coffee </p>
<i class="de fa fa-trash-o" job="delete"> </i>
</li>`
    const position = "beforeend";
    list.insertAdjacentHTML(postion, text);
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