$(document).ready(function() {
    auth = localStorage.getItem("login");
    login = document.getElementById('login');
    
    if (auth){
        $('#criar').hide();
        $('#entrar').hide();
        $('#sair').show();
    }else{
        $('#criar').show();
        $('#entrar').show();
        $('#sair').hide();
    }
    $( "#sair" ).on( "click", function() {
        localStorage.setItem("login", "");
        localStorage.setItem("senha", "");
        setTimeout(() => {
            window.location.href = "/Users/samuel_maia-junior/Documents/terceirao/Projeto%20Individual%20de%20Desenvolvimento%20Web%20-%205º%20Período%20ADS/index.html"; // Redireciona para o index
        }, 1000); 
    });
    $("#email").on("focusout", function(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        email = $('#inputEmail4').val();
        message = $('#message');
        if (emailRegex.test(email)) {
            message.html('testo');
            message.hide();
        } else {
            message.html('dsa');
            message.show();
        }

    });
    
      
});