let color = ""; 

const key = document.querySelector("#key");
const key2 = document.querySelector("#key2");

document.addEventListener("keydown", function (event) {

    if (event.key === "a") {    
        color = "pink"; 
        key.style.backgroundColor = color;
    } 
    else if (event.key === "s") {
        color = "orange"; 
        key.style.backgroundColor = color;  
    }
    else if (event.key === "d") {
        color = "skyblue"; 
        key.style.backgroundColor = color;
    }
});

document.addEventListener("keydown", function (event) {
    
    if (event.key === "q") {
        color = "purple";
        key2.style.backgroundColor = color;
    }
    else if (event.key === "w") {
        color = "gray";
        key2.style.backgroundColor = color;
    }
    else if (event.key === "e") {
        color = "brown";
        key2.style.backgroundColor = color;
    }
});