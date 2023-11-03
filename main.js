$(function() {

    $(".form-control").on("focus", function(){

        $(this).parents(".form-group").addClass("focused");

    });

    $(".form-control").on("blur", function(){
        
        $(this).parents(".form-group").removeClass("focused");
        
    });
    
});

/* TBD - tried to solve it with user-valid, both don't work 

function formCheck() {
    const test = document.querrySelector("form-input.name");
    test.classList.add("checked");
    const inputs = document.getElementsByClassName("form-input");
    inputs.innerHTML = "dupa";*/