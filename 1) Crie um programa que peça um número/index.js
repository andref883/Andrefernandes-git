const numeros = parseInt(prompt("Coloque um número maior que 1"));

 // inicializa a variável de soma com 0 pois ainda não somamos nada 
 let contagem= 0;

 if (isNaN(numeros) || numeros<=1){ 
    alert("Você não colocou um número maior que 1, tente de novo") // utilizo o comando if para informar que tem que colocar números e não letras
    }else {
        let sequencia = "";
    for (let i = 1; i < numeros; i++) {
        contagem += i; 
        sequencia += `${1}`

        alert(sequencia); // Utilizo o for para informar que é uma sequencia de números

   }

   alert(sequencia);
}