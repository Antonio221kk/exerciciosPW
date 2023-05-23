const input = document.querySelector("input");

let span = document.querySelector("div");

function verifyPassword(){

const password = document.querySelector("span")

if(input.value.length <= 5){

password.textContent = "Senha Fraca";
password.setAttribute("class","fraca");

}

if(input.value.length > 5 && input.value.length <=8){

    password.textContent = "Senha Moderada";
    password.setAttribute("class","media");
    
    }

    if(input.value.length > 8 && input.value.length <= 12){

        password.textContent = "Senha Forte";
        password.setAttribute("class","forte");
        
        }
}
input.addEventListener('input',verifyPassword);