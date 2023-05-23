let vetSalary = [];

const inputSalary = document.querySelector("#salary");
const btnAdd = document.querySelector("#btnAdd");

function addSalary (){
        //console.log("oi")
    vetSalary.push(inputSalary.value);
console.log(vetSalary)
}
btnAdd.addEventListener("click",addSalary);

const btnHigher = document.querySelector("#btnHigher");
const divHigher = document.querySelector("#higher");

max = 0
function maxSalary (e,i,array){

if(parseInt(e) > parseInt(max)){

max = e;

    divHigher.textContent = `${i} - ${max}`;
    }

}


function higherSalary (){
    console.log("Oi")
    vetSalary.forEach(maxSalary);
    
}
btnHigher.addEventListener("click",higherSalary);


const btnShow = document.querySelector("#btnShow");
const ul = document.querySelector("#show");

function showLine (e,i,array){
const li = document.createElement("li");
li.textContent = e;
ul.insertAdjacentElement("beforeend", li)

}

function showSalaries(){

ul.innerHTML = "";

vetSalary.forEach(showLine);

}


btnShow.addEventListener("click",showSalaries);