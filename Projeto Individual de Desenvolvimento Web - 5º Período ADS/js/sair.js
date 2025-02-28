$(document).ready(function () {
    $("#sair").on("click", function () {
        localStorage.setItem("login", "");
        localStorage.setItem("senha", "");

        setTimeout(() => {
            
            let currentPath = window.location.pathname.toLowerCase(); 

            
            let isInPages = currentPath.includes("/pages/") || currentPath.includes("\\pages\\");

    
            let basePath = isInPages ? "../" : "./";

            console.log("Redirecionando para:", basePath + "index.html");

            
            window.location.href = basePath + "index.html";
        }, 1000);
    });
});
