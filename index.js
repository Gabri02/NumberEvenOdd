const input1 = document.querySelector("input");
const result = document.querySelector("#target");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});


btn.addEventListener("click", ()=> {
    if(input1.value === "" ){
        result.innerHTML = "il campo è vuoto";
    }
    else if(isNaN(input1.value)){
        result.innerHTML = "Inserisci un numero!!!";
    }
    else if (input1.value % 2 === 0){
        result.innerHTML = "Pari";
    }
    else {
        result.innerHTML = "Dispari";
    }
});