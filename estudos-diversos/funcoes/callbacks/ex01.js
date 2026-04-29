   // CALL BACK NOMEADO
   function fazerPizza(sabor, callback){
        console.log(`Fazendo uma pizza de ${sabor}... `);
        setTimeout(() => {
            callback()  //indicar que o parâmetro recebe uma função
        }, 1500);
    }

    function pizzaPronta() {   //Função nomeada de callback
        console.log("A pizza está pronta!");
    }

    fazerPizza("calabresa", pizzaPronta)

    // CALLBACK ANÔNIMO

    fazerPizza("mussarela", function() {
        console.log("pizza de mussarela está pronta")
    }) 