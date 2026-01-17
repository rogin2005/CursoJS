let nomes = [
    "roger",
    "jamilton",
    "josé",
    "letícia",
    "maria",
    "carlos",
    "pedro",
    "marcela",
    "carla",
    "carlos"
]

function carregarNomes() {
    let itensLista = ''
    for( indice in nomes ){
        
        let nome = nomes[indice]
        itensLista += `<li class="list-group-item">${nome}</li>`
        //alert(itensLista)
    }
    document.getElementById('lista').innerHTML = itensLista

}
