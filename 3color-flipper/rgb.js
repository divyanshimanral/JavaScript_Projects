const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb =  `rgb(${r}, ${g}, ${b})`;
    console.log(rgb)
    color.textContent = rgb;
    document.body.style.backgroundColor = rgb;
})