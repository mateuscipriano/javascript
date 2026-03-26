var agora = new Date()
var hora =agora.getHours()

if (hora > 5 && hora < 12){
    console.log('dia')
}
else if(hora >= 12 && hora < 18) {
    console.log('tarde')
}
else if(hora >=18 ) {
    console.log('noite')
} else {
    console.log('madrugada')
}
