const usersList = [
    {
        name : "Fábio Santos",
        email: "fabio@example.com",
        password : "12345"
    },
    {
        name: "Maria Oliveira",
        email: "maria@example.com",
        password: "12345"
    },
    {
        name: "Carlos Ferreira",
        email: "carlos@example.com",
        password: "12345"
    },
    {
        name: "João da Silva",
        email: "joao@example.com",
        password: "12345"
    }
];

const button = document.querySelector("button");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let messages = document.querySelector("#messages")
function login(e){
    if(email.value === e.email && password.value === e.password){
        messages.textContent = `Ola, ${e.name}!`;
        messages.setAttribute("class","success")
     }
}
function log(){
    messages.textContent = `Usuario e/ou senha incorretos`;
    messages.setAttribute("class","warning");
    usersList.forEach(login)
}
button.addEventListener("click", log);
