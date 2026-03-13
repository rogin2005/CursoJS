//TODO CartItem
type CartItem = {
    id: number;
    price: number;
};

//TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[];
};

//TODO criar variavel do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartItems: [
        { id: 1000, price: 200 },
        { id: 1200, price: 300 },
        { id: 1300, price: 400 },
    ],
};

export function calculateTotal(shoppingCart: ShoppingCart): number {
    const total = shoppingCart.cartItems.reduce(
        (acc, item) => acc + item.price,
        0,
    );

    return total;
}

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
