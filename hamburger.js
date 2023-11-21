const hamburger = document.querySelector(".burger-icon");

function menuShow (){
    menu = document.querySelector(".navbar ul")
    if (hamburger.innerHTML === "menu"){
        menu.style.display = "inline-block";
        menu.style.transform = "translateY(0px)";
        menu.style.opacity = 1;
        hamburger.innerHTML = "close";
    }
    else {
        menu.style.transform = "translateY(-20px)";
        menu.style.opacity = 0;
        hamburger.innerHTML = "menu";
        menu.style.display = "none";
    };
}

hamburger.addEventListener('click', menuShow);

/*const hamburger = document.getElementById("burgerIcon");
hamburger.onclick(body.navbar.ul.style.display = "block");*/