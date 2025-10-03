function verMoto() {
    var opcoes = document.getElementsByName('radm')
    var foto = document.querySelector('img#foto')
    var velocidade = document.querySelector('h3#velm')
    var marcha = document.querySelector('h3#marcha')

    foto.setAttribute('id', 'foto')
    if (opcoes[0].checked) {
        foto.setAttribute('src', 'bros.png')
        velocidade.innerHTML = "Velocidade máxima: 130Km/h"
        marcha.innerHTML = "Marchas: 5"
    } else if (opcoes[1].checked) {
        foto.setAttribute('src', 'factor.png')
        velocidade.innerHTML = "Velocidade máxima: 140Km/h"
        marcha.innerHTML = "Marchas: 5"
    } else if (opcoes[2].checked) {
        foto.setAttribute('src', 'bmw.png')
        velocidade.innerHTML = "Velocidade máxima: 240Km/h"
        marcha.innerHTML = "Marchas: 6"
    } else if (opcoes[3].checked) {
        foto.setAttribute('src', 'titan.png')
        velocidade.innerHTML = "Velocidade máxima: 150Km/h"
        marcha.innerHTML = "Marchas: 5"
    }
}