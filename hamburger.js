const hamburger = document.querySelector(".burger-icon");

function menuShow (){
    menu = document.querySelector(".navbar ul")
    if (hamburger.innerHTML === "menu"){
        menu.style.display = "inline";
        hamburger.innerHTML = "close";}
    else {
        menu .style.display = "none";
        hamburger.innerHTML = "menu";
    };

}

hamburger.addEventListener('click', menuShow);

/*const hamburger = document.getElementById("burgerIcon");
hamburger.onclick(body.navbar.ul.style.display = "block");*/