let num = [4,2,5,7]
num[4] = 10
num.push(6) /* cria mais um elemento e adiciona o valor especificado*/
console.log (`o vetor tem ${num.length} elementos`)
console.log(`${num}`)
console.log(`esse é o elemento 0: ${num[0]}`)
console.log(num.sort(function (a,b){return a-b}))
/* a = ínidice inicial
b = próximo índice*/
console.log(`${num}, agora o elemento 0 é: ${num[0]}`)


let pos = num.indexOf(7)
if (pos == -1){
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}