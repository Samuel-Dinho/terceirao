$(document).ready(function () {

    $("#sair").on("click", function () {
        localStorage.setItem("login", "");
        localStorage.setItem("senha", "");
        setTimeout(() => {
           basePath = window.location.pathname.includes("/Pages/") ? '../' : './';
           console.log(basePath);
           window.location.href = basePath +"index.html" ;
            
        }, 1000);
    })

});

