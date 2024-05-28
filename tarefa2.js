let num1 = document.querySelector("#num1");
let btVisualizar = document.querySelector("#btVisualizar");
let resposta = document.querySelector("#resp1");

function quantidade(){
    let nr1 = Number(num1.value);
    resp1 = (nr1 * 2);
    resp2 = (nr1 * 0.50);
    resposta.textContent = "Quantidade Ovos" + resp1 + "Quantidade queijo" + resp2

}

btVisualizar.onclick = function(){
    quantidade()
}