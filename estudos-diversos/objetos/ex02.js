class Carro{
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo= "esportivo"
            this.velmax=300
        }
     else{
        this.tipo= "popular"
        this.velmax= 160
    }
}
getInfo(){
    return [this.nome,this.tipo,this.velmax]
}
setNome(nome){
    this.nome=nome
}
/*info(){
    console.log(`Nome:${this.nome} `)
    console.log(`Tipo: ${this.tipo}`)
    console.log(`V.Max: ${this.velmax}`)
    console.log("-------------------------")
}*/
}

let c1 = new Carro("carro1",1)
let c2 = new Carro("carro2",1)
let c3 = new Carro("carro3",2)
c1.setNome("novonome1")
console.log(c1.getInfo())
