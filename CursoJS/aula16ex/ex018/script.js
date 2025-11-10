// meu metodo
let numeros = []

function Adicionar() {
    let n = document.querySelector('input#txtnum')
    let sel = document.querySelector('select#sel')
    let res = document.querySelector('div#resultado')
    let num = Number(n.value)

    res.innerHTML = ""

    if (n == "" || num < 1 || num > 100) {
        alert('Adicione um valor válido entre 1 e 100!')
    } else if (numeros.indexOf(num) !== -1) {
        alert('Ops, esse valor já existe na lista, digite um valor diferente!')
    } else {
        numeros.push(num)
        sel.innerHTML += `<option>Valor ${num} Adicionado</option>`
    }
    n.value = ''
    n.focus()
}


function Finalizar() {
    let res = document.querySelector('div#resultado')
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0

    if (numeros.length == 0) {
        alert('Lista vazia, adicione valores para continuar!')
    } else {
        // for para encontrar maior
        for (let c = 0; c < numeros.length; c++) {
            if (numeros[c] > maior) {
                maior = numeros[c]
            }
        }

        // for para encontrar menor
        for (let r = 0; r < numeros.length; r++) {
            if (numeros[r] < menor) {
                menor = numeros[r]
            }
        }


        // for para fazer soma
        for (let j = 0; j < numeros.length; j++) {
            soma += numeros[j]
        }


        res.innerHTML = `<p>No total tem ${numeros.length} números cadastrados.</p>
    <p>O maior valor cadastrado é ${maior}</p>
    <p>O menor valor cadastrado é ${menor}</p>
    <p>A soma de todos os valores é ${soma}</p>
    <p>A média de todos os valores é ${soma / numeros.length}</p>`
    }
}










// metodo guanabara:

/*
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>o maior valor foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor foi ${menor}</p>`
        res.innerHTML += `<p>somando tudo da o total: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}
*/
