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
        email2 = $('#inputEmail').val();
        message = $('#menssageEmail');
        if (emailRegex.test(email2)) {
            message.html('');
            message.hide();
        } else {
            message.html('E-mail com formato errado!');
            message.show();
        }

    });
    document.getElementById("inputZip").addEventListener("focusout", function() {
        const cep = document.getElementById("inputZip").value.replace(/\D/g, '');
  
        if (cep.length === 8) {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
              if (data.erro) {
                document.getElementById("resultadoCep").val ="CEP não encontrado." ;
              } else {
                $("#resultadoCep").html('');
                $('#inputAddress').val(data.logradouro);
                $('#inputBairro').val(data.bairro);
                $('#inputCity').val(data.localidade);
                $('#inputState').val(data.uf);
              }
            })
            .catch(error => {
                $("#resultadoCep").html('Erro ao consultar o CEP.');
            });
        } else {
            $("#resultadoCep").html('Por favor, insira um CEP válido (apenas números).');
        }
      });
      $('#inputnome').on('input', function(e) {
            this.value = this.value.replace(/\s/g, '');        
    });
    $('#inputPassword4').on('focusout',function(event) {    
        var password = $('#inputPassword4').val();
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    
        if (passwordRegex.test(password)) {
          $('#password-error').hide(); 
        } else {
          $('#password-error').html('Necessario pelo menos uma letra minúscula e maiuscula  um caractere especial');
          $('#password-error').show(); 
        }
        if($('#inputPasswordconfirm').val() != password){
            $('#password-error').html('As senhas não são iguais');
            $('#password-error').show(); 
        }else{
            $('#password-error').hide(); 
        }
      });
      $('#inputPasswordconfirm').on('focusout',function(event) {    
        var password = $('#inputPassword4').val();    
        if (password == this.value) {
          $('#password-error').hide(); 
        } else {
          $('#password-error').html('As senhas não são iguais');
          $('#password-error').show(); 
        }
      });
      $('form').submit(function(event){
       
    
        if($('#gridCheck').is(':checked')){
            console.log("termos aceitos");
    
            // Exibe mensagem de sucesso
            $('#mensagem-final').html('Cadastro realizado com sucesso');
            $('#mensagem-final').removeClass('fail').addClass('sucesso').show();
            localStorage.setItem("criadalogin", $('#inputEmail').val());
            localStorage.setItem("criadasenha", $('#inputPassword4').val());
            // Esconde a mensagem após 4 segundos
            setTimeout(function() {
                $('#mensagem-final').hide();
            }, 5000);
        } else {    
            // Exibe mensagem de erro
            $('#mensagem-final').html('Necessário aceitar os termos');
            $('#mensagem-final').removeClass('sucesso').addClass('fail').show();
    
            // Impede o envio do formulário
            event.preventDefault(); 
    
            // Esconde a mensagem após 4 segundos
            setTimeout(function() {
                $('#mensagem-final').hide();
            }, 5000);
        }
    });
    
});

function formatarCEP(input) {
    // Remove tudo o que não for número
    let cep = input.value.replace(/\D/g, '');

    // Se o CEP tiver mais de 5 números, insere o hífen
    if (cep.length > 5) {
      cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
    }

    // Define o valor do campo com o formato correto
    input.value = cep;
  }