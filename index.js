// Calculadora

function insert(num){
    document.getElementById("display").value += num;
}

function apagar(){
    document.getElementById("display").value = "";
}

function calculate(){
    let exp = document.getElementById("display").value;
    document.getElementById("display").value = eval(exp);
}


// Lista de tarefas

function addTask(){
    let task = document.getElementById("task").value;
    if(task){
        let li = document.createElement("li");
        li.textContent = task;
        
        document.getElementById("list").appendChild(li) 
        document.getElementById("task").value = "" 
       

    }
}

function removeTask(){
    let task = document.getElementById('list');
    task.removeChild(task.firstElementChild)
}


// Datas

function showDate(){
    let today = new Date();
    document.getElementById("date").textContent = today.toDateString();
}

showDate();


// Buscar JSON

const data = [
    {nome: "Rian", idade: 19} , 
    {nome: "João", idade: 25},
    {nome: "Carlos", idade: 30}
];


function findUser(){
    let query = document.getElementById("search").value.toLowerCase();
    let user = data.find(user => user.nome.toLowerCase() === query);
    document.getElementById("result").textContent = user ? 
     `Nome: ${user.nome}, idade: ${user.idade}` : "Usuário não encontrado";
}