login = "samuel@gmail.com";
senha = "12345";

$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); 

        email = $('#InputEmail1').val();
        password = $('#InputPassword1').val();

        
        if (email === "" || password === "") {
            $('#error').text('Usuário e senha são obrigatórios!').show();
            setTimeout(() =>{
                $('#error').hide();
            }, 2000);
            
        }else{
            if(email === login & password === senha){
                $('#sucess').text('Login bem sucedido!').show();
            setTimeout(() => {
                $('#sucess').hide();
                window.location.href = "../index.html";
                localStorage.setItem("login", email);
            }, 2000);
            }else{
                $('#InputEmail1').val('');
                $('#InputPassword1').val('');
                $('#error').text('Usuário ou senha estão erradas!').show();
                setTimeout(() =>{
                    $('#error').hide();
                   
                }, 2000);
            }
        }        
    });

    $('#InputEmail1').on('change', function() {
        if($('#exampleCheck1').is(':checked')){
            localStorage.setItem("login", $('#InputEmail1').val());
        }

    });
    $('#InputPassword1').on('change', function() {
        if($('#exampleCheck1').is(':checked')){
            localStorage.setItem("senha", $('#InputPassword1').val());
        }

    });
    $('#exampleCheck1').on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem("login", $('#InputEmail1').val());
            localStorage.setItem("senha", $('#InputPassword1').val());
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("login", '');
            localStorage.setItem("senha", '');
            localStorage.setItem("check", false);

        }
    });
    if(localStorage.getItem('check') == 'true'){
        $('#exampleCheck1').prop('checked', true);
        $('#InputPassword1').val(localStorage.getItem("senha"));
        $('#InputEmail1').val(localStorage.getItem("login"));

    }else{
        localStorage.setItem("login", '');
        localStorage.setItem("senha", '');
        $('#InputPassword1').val('');
        $('#InputEmail1').val('');
    }
});