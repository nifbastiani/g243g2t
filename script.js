const btn = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
   let usuario = localStorage.getItem("usuario");
   if(usuario){
     window.location.href = "http://www.uol.com.br";
   }
})();

btn.onclick = (e) =>{
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
if(usuario === "meg"){
    if(senha === "123"){
        localStorage.setItem("usuario",usuario);
        window.location.href = "http://www.uol.com.br";
    }else{
        inputUsuario.focus();
    }
}

     
}