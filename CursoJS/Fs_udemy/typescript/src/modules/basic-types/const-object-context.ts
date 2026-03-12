/*
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 5489698345,
} as const; // atribui como readonly a todos
*/

type File = {
    readonly name: string; // controle de visibilidade com alias
    size: number;
};

const file: File = {
    // const protege a referencia de memoria
    name: 'lista_de_funcionarios.txt',
    size: 5489698345,
};

//file.name = 'lista_de_dependentes.txt';

export default function handleFileUpload(file: File) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}

handleFileUpload(file);
