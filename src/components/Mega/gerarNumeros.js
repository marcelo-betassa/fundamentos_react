function gerarNumeros(qtd) {
   let  numeros = Array(qtd)
   .fill(0)
   .reduce((nums) => {
       const novoNum = gerarNumeroNaoContidos(1,60,nums)
    //    console.log([...nums, novoNum]);
       return [...nums, novoNum]
   },[])
   .sort((n1, n2) => n1 - n2);
   
   return numeros
}


function gerarNumeroNaoContidos(min, max, array) {
    let numAleatorio = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(numAleatorio) ? gerarNumeroNaoContidos(min, max, array) : numAleatorio
}


// console.log(gerarNumeroNaoContidos(1, 6, [1,3,4,5]));

// console.log(gerarNumeros(6));