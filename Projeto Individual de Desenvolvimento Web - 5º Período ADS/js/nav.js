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

});