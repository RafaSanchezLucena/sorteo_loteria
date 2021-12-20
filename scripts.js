const boton = document.querySelector(".boton");

const numSorteos = 5000;
const numeroElegido = 11760;
const numeroRandom = 1000;


const sorteo = ()=> {
    for (let i = 0; i < numSorteos; i++) {
        let num = Math.floor(Math.random() * numeroRandom + 1);
        if (num === numeroElegido) {
            console.log(`El número ${numeroElegido} ha salido premiado en el sorteo nº: ${i}.`);
            break;
        }console.log("Se están realizando los sorteos...");
    }; 
}

const funcionPrincipalAsync = async (fn) => {
    let posibilidades = 1 / numeroRandom;
    let porcentaje = posibilidades * 100;
    console.log("Comienza el sorteo...");
    console.log(`Tienes ${posibilidades} posibilidades de que salga premiado el número: ${numeroElegido}.`);
    console.log(`Y el porcentaje de que salga premiado es del ${porcentaje}%`);
    await fn(); 
    console.log("Los sorteos han finalizado.");
};

boton.addEventListener("click", function(){
    funcionPrincipalAsync(sorteo);
});