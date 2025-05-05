const num1 = parseInt(prompt("Digite algum número primeiro:"));
const num2 = parseInt(prompt("Agora digite um segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) { 
  let inicio;
  let fim;

  if (num1 < num2) {
    inicio = num1;
    fim = num2;
  } else {
    inicio = num2;
    fim = num1;
  }

  let pares = "";

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      pares += i + " ";
    }
  }

  alert("Números pares entre " + inicio + " e " + fim + ": " + pares);
} else {
  alert("Você colocou um número que está invalido");
}