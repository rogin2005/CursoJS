// declara num como uma array ou variavel composta
let num = [5, 0, 2, 4, 6]

console.log(num)

// add o valor 8 a posição 5 da array num
num[5] = 8

console.log(num)

// add o valor 21 a ultima posição de num independente de qual seja ela, pois é um metodo de js
num.push(1)

console.log(num)


console.log(`O vetor tem ${num.length} posições!`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

// metodo para ordenar os valores do vetor crescente
num.sort()

console.log(num)

// for para mostrar todos os valores separadamente.
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
