export const bootstrap = (): void => {
    type Person = {
        name: string;
        age: number;
    };

    type Employee = {
        department: string;
    };

    type Customer = {
        wishlist: string[];
    };

    type EmployeeDetails = Person & Employee;

    const employee: EmployeeDetails = {
        name: 'Roger',
        age: 25,
        department: 'TI',
    };

    type CustomerDetails = Person & Customer;

    const customer: CustomerDetails = {
        name: 'Ronaldo',
        age: 35,
        wishlist: ['Smartphone', 'Laptop', 'Playstation'],
    };
};
