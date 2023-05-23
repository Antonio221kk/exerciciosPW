const arrayFruits = ['maça','laranja','morango','abacaxi'];

const fruit = document.querySelector("#fruit");
const button = document.querySelector("button");

const resultSearch = document.querySelector(".resultSearch");

function busca (e,i){

if(e === fruit.value){

resultSearch.textContent = "Fruta encontrada!"

}

}

function searchFruits(e,i,array){
    resultSearch.textContent = "Fruta não encontrada!"
    arrayFruits.forEach(busca);
}

button.addEventListener("click",searchFruits);