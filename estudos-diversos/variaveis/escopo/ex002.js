/*let nome = "nome1"

if (true) {  
let nome = 'nome2'
    console.log(nome)
}
console.log(nome)*/



for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

/*caso use o var, a variável sai do loop antes de ser executada*/