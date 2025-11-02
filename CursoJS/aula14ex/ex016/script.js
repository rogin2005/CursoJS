function Contar() {
    var ini = document.querySelector('input#ini').value
    var fi = document.querySelector('input#fim').value
    var pas = document.querySelector('input#pas').value
    var resultado = document.querySelector('div#res')

    var inicio = Number(ini)
    var fim = Number(fi)
    var passo = Number(pas)

    resultado.innerHTML = ""

    console.log(inicio)
    console.log(fim)
    console.log(passo)

    if (passo == 0) {
        passo = 1
        alert("Não dá para contar com passo 0, consdiderando passo 1 para continuar contagem!")
    }

    if ( inicio < 0 || fim <= inicio || !passo || !fim) {
        resultado.innerHTML = "Impossível contar!"
    } else {
        for (inicio ; inicio <= fim; inicio += passo) {
            resultado.innerHTML += `${inicio} 👉`
        }
        resultado.innerHTML += "🏁"
    }
    
console.log(passo)
    
}
