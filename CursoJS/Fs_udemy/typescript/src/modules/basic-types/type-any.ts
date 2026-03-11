export default function handleFileUpload(file: any) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.zise}`);
}

const file = {
    name: 'lista_de_funcionarios.txt',
    size: 5489698345,
};
handleFileUpload(file);
