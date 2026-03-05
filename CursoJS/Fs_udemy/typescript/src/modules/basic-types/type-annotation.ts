//let product: string = 'Micro-ondas';  //annotation somente quando necessário
let product = 'Micro-ondas';
let price = 648.5;

export function display(product: string, price: number) {
    console.log(product.toUpperCase(), price.toFixed(0));
}

display(product, price);
