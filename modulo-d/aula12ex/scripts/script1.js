function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12) { //dia
img.src ='imagens/foto-dia.jpg'
document.body.style.background = 'lightblue'
} 
else if (hora >=12 && hora <= 18) { //tarde
img.src = 'imagens/foto-tarde.jpg'
document.body.style.background = 'lightgreen'
} 
else { //noite
img.src ='imagens/foto-noite.png'
document.body.style.background = 'lightgray'
}
}