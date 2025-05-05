const peso = parseFloat(prompt("Insira seu peso"));

if  (isNaN(peso)) {
    alert("Número invalido");
} else {
    const altura = parseFloat(prompt("Insira sua altura"));

    if(isNaN(altura)){
        alert("Número inválido!");
    } else if}
        let imc = peso / (altura * altura);

        if (imc < 18.50) {

        } alert("Abaixo do peso!");
         else if(imc >= 25 && imc <= 24.9)
            alert("Peso normal");
         {else if (imc >= 25 && imc <= 29.9){
             alert("Sobrepeso");
         }   else if(imc >= 30)}
             alert("Obesidade!");