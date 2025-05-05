 let soma =0      

 for (let i = 1; i <= 10; i++) {
    let numeros = parseInt(prompt("Insira dez números")) // utilizo o for para informar que os números tem que ser somados 
    soma += numeros
 }
    alert(`A soma dos dez numeros deu: ${soma}`) // coloco o "Soma" no final para informar o resoltado final 