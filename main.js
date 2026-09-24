/*Enzo Faustino Ribeiro / 26110738*/
/*Tipos de variáveis
var -> escopo global
let -> escopo local
const -> escopo flex, valor será o mesmo até o fim do programa
*/
const formulario = document.getElementById("calcForm")/*pegando o formulário*/

/*Criando variável*/
var valorUm = 3
var valorDois = 19
formulario.addEventListener("submit", function(e){
    e.preventDefault();/*impede que a página seja recarregada*/ 

/*
espremedor (fruta){
    suco
}
*/
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)

/*função*/
function somar(a,b){
    let c = a+b
    return (c)
}

console.log(somar(valorUm,valorDois))
    const soma = a+b

    document.getElementById("resultado").textContent = soma
})