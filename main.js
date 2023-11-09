$(function() {

    $(".form-input").on("focus", function(){

        $(this).parents(".form-group").addClass("focused");

    });

    $(".form-input").on("blur", function(){
        
        $(this).parents(".form-group").removeClass("focused");
        
    });
    
});

function formCheck() {
    const inputs = document.querySelector('.form-input:invalid');
    inputs.style.borderColor="var(--error)";
}

/*
function formCheck() {
    const inputs = document.querySelectorAll('.form-input');
    inputs.style.borderColor="var(--error)";
    /*if(inputs.checkValidity() === false){
        inputs.style.borderColor="var(--error)";
    }
    else {
        console.log("jest git mordo");
    }

    /*const test = document.querySelector("form-input.name");
    test.classList.add("checked");
    const inputs = document.getElementsByClassName("form-input");
    inputs.innerHTML = "dupa";}*/
