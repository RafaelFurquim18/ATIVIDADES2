let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let btDolar = document.querySelector("#btDolar");
let resposta1 = document.querySelector("#resp1");
let resposta2 = document.querySelector("#resp2");
let resposta3 = document.querySelector("#resp3");
let resposta4 = document.querySelector("#resp4");

function aumentar(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let nr3 = Number(num3.value);
    let nr4 = Number(num4.value);
    let resp1 = ((nr1 * 0.01) + (5.10));
    let resp2 = ((nr2 * 0.02) + (5.10));
    let resp3 = ((nr3 * 0.05) + (5.10));
    let resp4 = ((nr4 * 0.1) + (5.10));

    resposta1.textContent = resp1.toFixed(2);
    resposta2.textContent = resp2.toFixed(2);
    resposta3.textContent = resp3.toFixed(2);
    resposta4.textContent = resp4.toFixed(2);
}

btDolar.onclick = function(){
    aumentar();
}