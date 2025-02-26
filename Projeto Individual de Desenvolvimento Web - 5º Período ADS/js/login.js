login = "samuel@gmail.com";
senha = "12345";
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); 

        var email = $('#InputEmail1').val();
        var password = $('#InputPassword1').val();

        
        if (email === "" || password === "") {
            $('#error-message').text('Usuário e senha são obrigatórios!').show();
            setTimeout(() =>{
                $('#error-message').hide();
            }, 2000);
            
        }else{
            if(email === login & password === senha){
                $('#sucess').text('Login bem sucedido!').show();
            setTimeout(() => {
                $('#sucess').hide();
                window.location.href = "../index.html";
                localStorage.setItem("login", email);
            }, 2000);
            }
        }        
    });
});