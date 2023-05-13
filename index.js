const input1 = document.querySelector("input");
const result = document.querySelector("#target");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});


btn.addEventListener("click", ()=> {
    if(input1.value === "" ){
        result.innerHTML = "Is Void...";
    }
    else if(isNaN(input1.value)){
        result.innerHTML = "Insert a Number!!!";
    }
    else if (input1.value % 2 === 0){
        result.innerHTML = "Even";
    }
    else {
        result.innerHTML = "Odd";
    }
});