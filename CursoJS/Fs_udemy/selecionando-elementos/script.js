function executar() {
    console.log("Clique no botão!")
    botao.removeEventListener('click', executar)
}

function executar2() {
    console.log("Clique body!")
}

//const botao = document.getElementById('botao') // selecionando pelo id
//const botao = document.querySelector('[botao-acao]') //selecionando por atributo personalizado
//botao.onclick = executar  /* metodo 2 Rotina de tratamento de eventos DOM tradicional */
//botao.onclick = function(){executar()}

/* metodo 3 ouvintes de eventos DOM */

const botao = document.querySelector('[botao-acao]')
//botao.addEventListener('click', executar) //passa evento sem "on" e função
//botao.addEventListener('click', function(){executar()}) // pode passar função anonima

/* Verificação para quando o navegador não suporta addEventListener */
if ( botao.addEventListener ) {
    botao.addEventListener('click', executar)
} else {
    botao.attachEvent('onclick', executar)
}

//const body = document.querySelector('body')
//body.addEventListener('click', executar2)

// o 3 parametro bool, quando false significa que ele começa o evento do elemento mais interno e expande para os elementos pai, quando true ele começa do elemento pai e vai para o interno, o padrão é false
