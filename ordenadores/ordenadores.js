let saida = "";
let lista = [10,8,1,5,4,9,12,6,20,0,2,3];
const ordenaBubble = () =>{

    let trocar = true;
    console.log(lista);    
    while(trocar){
        trocar = false;
        let temporaria;
        for(let i = 0; i < lista.length - 1; i++){
            if(lista[i] > lista[i+1]){
                temporaria = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = temporaria;
                trocar = true;
                setTimeout(mostrar(),500);
                console.log(lista);
            }
        }
    }
   
}
const mostrar = () =>{
    saida = "";
    for(let i=0; i<lista.length - 1; i++){
        saida += lista[i] + " - ";
    }
    saida += lista[lista.length-1];
    console.log(saida);
    document.getElementById("bubble").innerHTML = saida;
}
(() =>{
   mostrar();
})();