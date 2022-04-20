function clicou(){
    var a=parseFloat(prompt("digite o primeiro numero"));
    var b=parseFloat(prompt("digite o segundo numero"));
    document.querySelector("#soma").innerHTML=("A soma dos valores e: "+(a+b));
    document.querySelector("#subtracao").innerHTML=("A subtração dos valores e: "+(a-b));
    document.querySelector("#multiplicacao").innerHTML=("A multiplicação dos valores e: "+(a*b));
    document.querySelector("#divisao").innerHTML=("A divisão dos valores e: "+(a/b));

}