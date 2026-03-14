//TODO CartItem
type CartItem = {
    id: number;
    price: number;
};

type Address = {
    cep: string;
    default: boolean;
};

type Customer = {
    addresses: Address[];
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

const addresses: Address[] = [
    { cep: '00000-000', default: false },
    { cep: '00000-001', default: false },
    { cep: '00000-002', default: true },
];

const customer: Customer = {
    addresses: addresses,
};

// --
//let calculateTotal: (sC: ShoppingCart) => number;

let calculateTotal: (sC: ShoppingCart) => number = function (
    shoppingCart: ShoppingCart,
): number {
    const total = shoppingCart.cartItems.reduce(
        (acc, item) => acc + item.price,
        0,
    );

    return total;
};

type AddressOrUndefined = (c: Customer) => Address | undefined;

//let getPrincipalAddress: AddressOrUndefined;

const getPrincipalAddress: AddressOrUndefined = (
    customer: Customer,
): Address | undefined => {
    return customer.addresses.find((address) => address.default);
};

// --

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
    console.log(principalAddress);
}

export { calculateTotal, getPrincipalAddress };
