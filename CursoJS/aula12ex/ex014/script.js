function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#69baf5'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#f6ae7c'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#302a48'
    }
}