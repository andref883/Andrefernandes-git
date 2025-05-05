let numeros = parseInt(prompt("Insrira dez números"))
let tabuada = 0

    for (let i = 1; i <=10; i++) {
        tabuada += numeros       
    }

    if (isNaN(numeros || numeros <=1)){
        alert("Você não colocou o número certo")
    }else{
        
        alert(`${numeros} x ${i} = ${numeros*i}`);
    }