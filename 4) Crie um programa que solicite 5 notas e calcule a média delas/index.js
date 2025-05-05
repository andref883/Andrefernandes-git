let soma = 0;

for (let i = 1; i <= 5; i++) {   // O "for" é utilizado para estabelecer que a pessoa precisa digitar um número maior que 1 e menor ou igual a 5.
  const nota = parseFloat(prompt("Digite algum numero " + i + ":"));

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {  // o if foi utilizado porque quando as notas serem somadas dará a soma += a nota.
    soma += nota;
  } else {
    alert("O numero está errado.");
  }
}

    let media = soma / 5;
    alert("A média das 5 notas será de: " + media);