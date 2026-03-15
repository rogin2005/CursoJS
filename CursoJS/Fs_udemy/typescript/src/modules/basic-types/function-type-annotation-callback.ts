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
        { id: 1300, price: 500 },
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
type ApplyDiscountFn = (total: number, discount: number) => number;

const applyDiscount: ApplyDiscountFn = (
    total: number,
    discount: number,
): number => {
    return total - total * discount;
};

type CalculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;

let calculateTotal: CalculateTotalFn = function (
    shoppingCart: ShoppingCart,
    applyDiscount: ApplyDiscountFn,
): number {
    const total = shoppingCart.cartItems.reduce(
        (acc, item) => acc + item.price,
        0,
    );

    return applyDiscount(total, 0.1);
};

type AddressOrUndefined = (c: Customer) => Address | undefined;

//let getPrincipalAddress: AddressOrUndefined;

const getPrincipalAddress: AddressOrUndefined = (
    customer: Customer,
): Address | undefined => {
    return customer.addresses.find((address) => address.default);
};

// --

const total = calculateTotal(shoppingCart, applyDiscount);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
    console.log(principalAddress);
}

export { calculateTotal, getPrincipalAddress };
