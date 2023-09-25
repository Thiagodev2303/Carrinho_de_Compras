function verificarLogado(){
    if(getCookie("email") != null){

    window.location.href = "loja.html";
    }
   }

   function camposPreenchidos(form){

    erEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
    if(form.email.value == "" || !form.email.value.match(erEmail)){
    alert("Preencha o campo EMAIL corretamente");
    return false;
    }
    if(form.conectado.checked){
    setCookie("email", form.email.value, 10);
    }
    return true;
    function validarSenha(senha) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return re.test(senha);
      }
      
   }