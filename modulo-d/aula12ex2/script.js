function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert ('erro')
    }
        else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked) {
                gênero = 'Homem'
                if (idade >= 0 && idade < 10){ //criança
                    img.setAttribute('src', '#')
                    img.setAttribute('alt', ' bbm')
                } else if (idade < 21) { //jovem
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', ' jovem m')
                } else if (idade < 50){ //adulto
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', ' adulto m')
                } else { //idoso
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', ' idoso m')
                }
            }
            else if (fsex[1].checked){
                gênero = 'Mulher'
                  if (idade >= 0 && idade < 10){ //criança
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', 'bbf')
                } else if (idade < 21) { //jovem
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', 'jovem f')
                } else if (idade < 50){ //adulto
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', 'adulto f')
                } else { //idoso
                     img.setAttribute('src', '#')
                    img.setAttribute('alt', 'idoso f')
                }
            }
            res.style.textAlign = 'center'
            res. innerHTML = `${gênero} ${idade}  `
            res.appendChild(img)
        }   
}