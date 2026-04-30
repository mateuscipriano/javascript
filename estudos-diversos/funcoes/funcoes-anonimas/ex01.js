//Função anônima
const f= function(v1,v2){
    return v1+v2
}

console.log(f(10,5))

//Função Construtor Anônima
//Necessita de argumentos e o corpo
const c= new Function("v1","v2","return v1+v2")

console.log(c(5,5))
/*
função anônima sem nome, só é criada no momento da execução, não tem espaço pré-reservado na memória
*/