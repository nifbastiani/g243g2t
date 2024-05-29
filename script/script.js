const btnAula1 = document.querySelector("#btnTeste");
const escreve = document.querySelector("#textoHeader");


btnAula1.onclick = () =>{
    alert("Jesus é meu Best Friend!")
}

const nome = "JESUS É AMIGO DO EMANUEL!".split("");

const escreveNome = (pos)=>{
    if(pos < nome.length){
        let saida = "";
        for(let i=0; i <= pos; i++){
           saida += nome[pos];
           setTimeout(() => {
               escreve.innerHTML = saida;
               pos++;
               escreveNome(pos);
           }, 1000);
        }
    }
}

(()=>{
   escreveNome(0);
})();