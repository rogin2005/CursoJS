let valores = [5, 6, 4, 8, 1, 3]
let nomes = ['roger', 'dayvi', 'frank', 'cool']

valores.sort()
nomes.sort()

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// for para exibir todos os valores separados
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


// for simplificado para exibir os valores igual o anterior
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


// busca de valores com indexOf() na array e validação básica, sempre que o js retornar -1 nesses casos é pq o valor n existe dentro da array
let pos = valores.indexOf(5)
if (pos == -1) {
    console.log('O valor n foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


console.log(`lista de nomes: ${nomes}`)
