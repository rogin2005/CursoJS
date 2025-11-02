function gerarTabuada () {
    var n = document.querySelector('input#n').value
    var sel = document.querySelector('select#nums')

    var num = Number(n)

    console.log(num)

    sel.innerHTML = "<option>Digite um número acima!</option>"

    if (n == "") {
        alert("Ops, digite um número qualquer para conseguir sua tabuada!")
    } else {
        sel.innerHTML = ""
        for (var c = 1; c <= 10; c++) {
            sel.innerHTML += `<option>${num} x ${c} = ${num*c}</option>`
            // dá pra fazer com createElement também
        }
    }
}