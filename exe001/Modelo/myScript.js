var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var h1 = document.querySelector('header')

var data = new Date()

var hora = data.getHours()

function carregar() {
    if (hora < 12 && hora >= 5) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#fed845'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = 'dia.png'
        document.body.style.backgroundColor = '#538708'
    } else if (hora == 0) {
        msg.innerHTML = `Boa noite, agora é meia noite.`
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#2e4a4e'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#2e4a4e'
    }
    
}