let filmArray: (number | string | boolean)[] = [1, 'Guerra Civil', true];
// tuple
let filmTuple: [number, string, boolean] = [
    3,
    'Um Lugar Silencioso: Dia Um',
    false,
];
// tuple com valores opcionais
let filmTupleOpcionalPosition: [number, string, boolean?, string?] = [
    3,
    'Um Lugar Silencioso: Dia Um',
];

//
const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;

console.log(id);
