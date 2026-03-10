//let programmer: { name: string; age: number; skills: string[] } = { // tipagem manual
let programmer = {
    name: 'Roger',
    age: 21,
    skills: ['JavaScript', 'TypeScript'],
};

programmer.name = 'joao';
programmer.age = 23;

export function showProgrammer(programmer: {
    name: string;
    age?: number;
    skills?: string[];
}) {
    console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({ name: 'Carlos', skills: ['PHP'] }); // outro meio...
