function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var pas = Number(passo.value)
    res.innerHTML = 'Contando:<br>'
    if (n1 >= n2|| n2 <= n1){ 
        res.innerHTML = 'erro'
    }
    else if (pas >= n2 || pas <= 0) {
        passo.value = 1
        res.innerHTML = 'erro, considere passo = 1'

    }
     else if (n1.length == 0 || n2.length == 0 || pas.length == 0){
        res.innerHTML = 'erro'
    }
    else{
    for (var n1; n1<=n2; n1+=pas){
        res.innerHTML += ` ${n1},`
    }
    res.innerHTML += ' fim'
}
}
