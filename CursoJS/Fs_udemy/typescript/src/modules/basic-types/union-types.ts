let shoppingCart = [200.75, 150.12, '33.90', '44', 'not defined'];

//export function totalize(values: Array<string | number | null | object>) {}
//retornar o total
export function totalize(values: (number | string)[]) {
    return values
        .map((value) => (typeof value === 'number' ? value : parseFloat(value))) // Converter todos os valores para numeros
        .filter((value) => !isNaN(value)) // Filtrar os valores validos
        .reduce((acc, curr) => acc + curr, 0); // Totalizar
}

console.log(totalize(shoppingCart));
