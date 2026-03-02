export function sum(a: number, b: number) {
    console.log('Dentro do escopo de módulo');
    return {
        result: a + b,
    };
}
