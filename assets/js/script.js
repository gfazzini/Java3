function pintar(e, color = "green") {
    e.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.style.backgroundColor = "green";

ele.addEventListener("click", (e) => {
    pintar(e, "yellow");
});
