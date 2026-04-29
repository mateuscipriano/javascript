// CALLBACK E PARÂMETROS

function fazerPizzaComBorda(sabor, callback){
    console.log(`Fazendo uma Pizza de ${sabor} com borda recheada...`);
    setTimeout(() => {
        callback(sabor)
    }, 1500);
}

fazerPizzaComBorda("frango com catupiry", function (sabor) {
    console.log(`A pizza de ${sabor} com borda recheada está pronta!`)
})