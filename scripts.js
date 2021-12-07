const boton = document.querySelector(".boton");

const mensajeSorteo = () => {
    console.log(`Se están realizando los sorteos...`);
};

const funcionPrincipal = async (numSorteos, numeroElegido, numeroRandom, mensajeSorteo) => {
    let posibilidades = 1 / numeroRandom;
    let porcentaje = posibilidades * 100;
    console.log("Comienza el sorteo...");
    console.log(`Tienes ${posibilidades} posibilidades de que salga premiado el número: ${numeroElegido}.`);
    console.log(`Y el porcentaje de que salga premiado es del ${porcentaje}%`);
    for (let i = 0; i < numSorteos; i++) {
        let num = Math.floor(Math.random() * numeroRandom + 1);
        if (num === numeroElegido) {
            console.log(`El número ${numeroElegido} ha salido premiado en el sorteo nº: ${i}.`);
            break;
        } mensajeSorteo();
    }; 
    console.log("Los sorteos han finalizado.");
};

let numSorteos = 30000;
let numeroElegido = 1315;
let numeroRandom = 100000;

boton.addEventListener("click", function(){
    funcionPrincipal(numSorteos, numeroElegido, numeroRandom, mensajeSorteo);
});