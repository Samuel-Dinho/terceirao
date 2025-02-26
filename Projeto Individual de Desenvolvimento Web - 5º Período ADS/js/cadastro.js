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
        console.log(window.location.href);
        setTimeout(() => {
        //window.location.href = "index.html";
        },1000);
      } );
      
});