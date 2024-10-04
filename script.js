let btn = document.querySelector("button");
let div = document.querySelector("div");



btn.addEventListener("click", function () {
    let h3 = document.querySelector("h2");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");

    div.style.backgroundColor = randomColor;

    div.style.color = "white";

});


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}