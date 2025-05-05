 //programa que solicita ao usuário um número e calcula a soma de 1 até o número digitado.

 // solicita ao usuário que digite um número maior que 1
 const num = parseInt(prompt("Digite um número para somar de 1 até ele:"));

 // inicializa a variável de soma com 0 pois ainda não somamos nada 
 let soma = 0;

 if (isNaN(num) || num<=1){ 
    alert("Erro: Você não digitou um número maior que 1")
    }else {

        /*
        Estrutura do loop for:
        -Inicialização: let i = 1 -> Começamos o contador i em 1.
        -Condição: i<= num -> O loop continua enquanto i for maior ou igual a num (variável que armazena o número do usuário)
        -Atualização: i++ -> A cada repetição, i aumenta em 1 
        */

         for (let i = 1; i < num; i++) {
           // A cada repetição, somamos o valor de i à variável soma.
           soma += i; // Soma = Soma + 1; 
        }

        alert(`A soma de 1 até ${num} é: ${soma}`);
    }