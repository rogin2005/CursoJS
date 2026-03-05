let films = ['Duna: Parte 2', 'Divertida Mente 2']; //inference de string[]

//let films: string[] = ['Duna: Parte 2', 'Divertida Mente 2'];  // annotation de string[]
//let numbers: number[] = [10, 20];  // annotation de number[]

//let films: Array<string> = ['Duna: Parte 2', 'Divertida Mente 2']; // interface Array com type string
//let numbers: Array<number> = [10, 20]; // interface Array com type number

export function toUpperCaseStrings(arr: string[]) {
    return arr.map((value) => value.toUpperCase());
}

console.log(toUpperCaseStrings(films));
