const Numero = (parseFloat(prompt("insira um numero")));// declarando a variavel do numero para saber se ele é maior que 0 sendo positivo


if(isNaN(Numero)){
    alert("seu numero é invalido"); //utilizo o comando if para saber que uma letra nao e um numero
}

if (!isNaN(Numero)) {

    if (Numero > 0) {
        alert("seu numero é positivo");// utiliziando o if para informar que se o numero for maior que 0 é positivo e se for menor que 0 é negativo
    }else{
        alert("seu numero é menor que 0");

    }


}