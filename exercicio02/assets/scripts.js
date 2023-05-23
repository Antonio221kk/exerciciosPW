let vetNames = [];

const name = document.querySelector("#name");
const btnAdd = document.querySelector("#btnAdd");

function addName (){

vetNames.push(name.value);
console.log(vetNames)

}
btnAdd.addEventListener("click",addName);

const search = document.querySelector("#search");
const btnSearch = document.querySelector("#btnSearch");
const divResult = document.querySelector("#result");

function searchLine(e,i){

    if(search.value == e){
        divResult.textContent = `Nome encontrado na posição i ${i, e}`
}
else{
        divResult.textContent = `Nome não encontrado`;
    }
}

function searchName(e,i,array){

    vetNames.forEach(searchLine);

}
btnSearch.addEventListener("click",searchName);
