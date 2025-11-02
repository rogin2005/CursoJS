function Contar() {
    var inicio = document.querySelector('input#ini').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#pas').value
    var resultado = document.querySelector('div#res')


    console.log(inicio)
    console.log(fim)
    console.log(passo)

    if (passo == 0) {
        passo = 1
        alert("Não dá para contar com passo 0, consdiderando passo 1 para continuar contagem!")
    }

    if (!inicio || fim <= inicio || !passo || !fim) {
        resultado.innerHTML = "Impossível contar!"
    } else {
        resultado.innerHTML = ""
        for (inicio; inicio <= fim; inicio++) {
            resultado.innerHTML += `${inicio} 👉`
        }
        resultado.innerHTML += "🏁"
    }
    
console.log(passo)
    
}
