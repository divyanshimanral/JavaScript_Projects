const container = document.querySelector('.container');

const cardAmount = 9;

let bool = true;

let colorArr = [];
let colorArr2 = [];

function rndColor() {
    const x = Math.round(0xffffff * Math.random()).toString(16);
    const y = 6 - x.length;
    const z = "000000";
    const z1 = z.substring(0, y);
    const randomColor = '#' + z1 + x;
    return randomColor;
}

for (let i = 0; i < cardAmount; i++){
    const color1 = rndColor();
    const color2 = rndColor();

    colorArr.push(color1)
    colorArr2.push(color2)

    container.innerHTML += `
    <div class="card">

      <div class="card-header">
       <h3 class="card-id">00${i + 1}</h3>
       <button class="type">Linear</button>
      </div>

      <div class="card-body">
       <div 
         class="gradient"  
         style="background: linear-gradient(45deg, ${color1}, ${color2});"
       ></div>
      </div>

      <div class="card-footer">
       <div>
         <span class="color1">${color1}</span>
         <span class="color2">${color2}</span>
       </div>
      <button class="copy">Copy CSS</button>
      </div> 

    </div>
    `;
}

// setting up the graidents 
document.addEventListener("click",(e) => {
    if(e.target && e.target.classList.contains("type")) {
        bool = !bool;

        const gradient =e.target.parentElement.parentElement.children[1].firstElementChild
        // console.log(e.target);
        const id = parseInt(
            e.target.parentElement.parentElement.children[0]
            .firstElementChild.innerText.substr(2)) - 1;
            
            if(bool === true) {
                gradient.style.background = `linear-gradient(45deg, ${colorArr[id]}, ${colorArr2[id]})`;
                e.target.innerText = "Linear"
            }else{
                gradient.style.background = `radial-gradient(circle, ${colorArr[id]}, ${colorArr2[id]})`;
                e.target.innerText = "Radial";
            }
    }
});

// for copying the code 
document.addEventListener("click", (e) => {
  if(e.target && e.target.classList.contains("copy")) {
    const gradient = e.target.parentElement.parentElement.children[1].firstElementChild;
    const gradientStyle = gradient.style.background
    const input = document.createElement("input");
    input.value = gradientStyle
    document.body.appendChild(input);
    input.select()
    document.execCommand('copy');
    document.body.removeChild(input);
    alert("Gradient CSS copied to clipboard")
  }
})
