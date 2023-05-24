let vetAges = [];

const inputAge = document.querySelector("#age");
const btnAdd = document.querySelector(".btnAdd");

function addAge (){

vetAges.push(inputAge.value)
console.log(vetAges);

}
btnAdd.addEventListener('click',addAge)
//separação do código para auxíliar na organização...

const btnAverage = document.querySelector(".btnAverage");
const average = document.querySelector("#average");

function mediaAge(){
let soma = 0;
for(var i = 0; i < vetAges.length;i++){
    soma += inputAge.value;

}
let media = soma / vetAges.length;
    average.textContent = media;
}
btnAverage.addEventListener('click',mediaAge);

const btnShow = document.querySelector(".btnShow");
const idShow = document.querySelector("#show")

function showView(e,i,array){
    const li = document.createElement("li");
    li.textContent = e;
    idShow.insertAdjacentElement("beforeend",li);

}

function showAge(){
    idShow.innerHTML = "";
vetAges.forEach(showView);

}
btnShow.addEventListener("click",showAge);
