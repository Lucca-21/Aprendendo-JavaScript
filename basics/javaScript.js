var a = window.document.getElementById ('area_1')

a.addEventListener ('click', clicar)
a.addEventListener ('mouseenter', entrar)
a.addEventListener ('mouseout', sair)

function  entrar() {
    a.innerText = 'Entrou'
    a.style.borderRadius = `50px`
    a.style.backgroundColor = `red`
}

function sair() {
    a.innerText = 'Saiu'
    a.style.borderRadius = `0px`
    a.style.backgroundColor = `blue`
}

function clicar() {
    a.innerText = 'Clicou'
    a.style.backgroundColor = `green`
    a.style.borderRadius = `25px`
}

/* ------------------------------------------------------------------ */

var igual = window.document.querySelector ('input#Button')

igual.addEventListener ('click', somar)

function somar() {
    
    var num1 = window.document.getElementById ('numero_1')
    var num2 = window.document.querySelector ('input#numero_2')
    
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var res = n1 + n2

    resultado.innerHTML = res

}

/* ------------------------------------------------------------------ */

var verificar = window.document.querySelector ('input#verificar')
verificar.addEventListener ('click', calcular)

function calcular() {
    var velocidade = window.document.querySelector ('input#txtvel1')

    var vel = Number(velocidade.value)

    if (vel <= 80) {
        veredito.innerHTML = '👍'
        veredito.style.backgroundColor = `greenyellow`
    } else {
        veredito.innerHTML = '👎'
        veredito.style.backgroundColor = `red`
    }

}

/* --------------------------------------------------------------------- */

var checagem = window.document.querySelector ('input#button_idade')
checagem.addEventListener ('click', checando)

function checando() {
    var sua_idade = window.document.querySelector ('input#idade')
    var si = Number(sua_idade.value)

    if (si <= 5) {
        resposta.innerHTML = '👶'
    } else if (si <= 15) {
        resposta.innerHTML = '🤓'
    } else if (si <= 23) {
        resposta.innerHTML = '🧑'
    } else if (si == 24) {
        resposta.innerHTML = '🌈'
    } else if (si >= 25 && si <= 68) {
        resposta.innerHTML = '👨'
    } else if (si == 69) {
        resposta.innerHTML = '😈'
    } else if (si >= 70 && si <= 99) {
        resposta.innerHTML = '👴'
    } else if (si >= 100) {
        resposta.innerHTML = '💀'
    }

}

/* --------------------------------------------------------- */

var start = window.document.querySelector ('input#start')
start.addEventListener ('click', start_day)

function start_day() {

    var agora = new Date()
    var dia_sem = agora.getDay()

    switch(dia_sem) {
        case 0:
            finish.style.fontSize = '1rem'
            finish.style.padding = '15px'
            finish.innerHTML = 'Domingo'
            break

        case 1:
            finish.style.fontSize = '1rem'
            finish.style.padding = '5px'
            finish.innerHTML = 'Segunda-feira'
            break

        case 2:
            finish.style.fontSize = '1rem'
            finish.style.padding = '5px'
            finish.innerHTML = 'Terça-feira'
            break

        case 3:
            finish.style.fontSize = '1rem'
            finish.style.padding = '5px'
            finish.innerHTML = 'Quarta-feira'
            break

        case 4:
            finish.style.fontSize = '1rem'
            finish.style.padding = '5px'
            finish.innerHTML = 'Quinta-feira'
            break

        case 5:
            finish.style.fontSize = '1rem'
            finish.style.padding = '5px'
            finish.innerHTML = 'Sexta-feira'
            break

        case 6:
            finish.style.fontSize = '1rem'
            finish.style.padding = '15px'
            finish.innerHTML = 'Sábado'
            break

        default:
            finish.style.fontSize = '1rem'
            finish.style.padding = '15px'
            finish.innerHTML = '[ERROR]'
            break
    }





}