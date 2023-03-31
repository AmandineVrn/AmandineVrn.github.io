
function afficheMenu(obj){
    var idMenu     = obj.id;
    var idSousMenu = 'sous' + idMenu;
    var sousMenu   = document.getElementById(idSousMenu);

    // get all sous-menus elements
    var sousMenus = document.querySelectorAll(".sous_menu");
    // loop through all sous-menus and hide them
    for (let i = 0; i < sousMenus.length; i++) {
        if(sousMenus[i] != sousMenu){
            sousMenus[i].style.display = "none";
        }
    }

    if(sousMenu){
        if(sousMenu.style.display == "flex"){
            sousMenu.style.display = "none";
        }
        else{
            sousMenu.style.display = "flex";
        }
    }
}

function showAlert(){
    alert("Le formulaire n'est pas fonctionel pour l'instant, pour me contacter envoyez moi un mail.");
}