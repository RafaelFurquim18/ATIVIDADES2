let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btVerificar = document.querySelector("#btVerificar");
let resposta1 = document.querySelector("#resp1");
let resposta2 = document.querySelector("#resp2");
let resposta3 = document.querySelector("#resp3");
let resposta4 = document.querySelector("#resp4");

function verificar (){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp1 = (nr1 + nr2);
    let resp2 = (nr1 - nr2);
    let resp3 = (nr1 * nr2);
    let resp4 = (nr1 / nr2);

    resposta1.textContent = resp1.toFixed(2);
    resposta2.textContent = resp2.toFixed(2);
    resposta3.textContent = resp3.toFixed(2);
    resposta4.textContent = resp4.toFixed(2);
}

btVerificar.onclick = function(){
    verificar();
}