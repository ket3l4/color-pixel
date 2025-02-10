console.log('Happy debugging ✨')
let container = document.querySelector('.container')
let size = document.querySelector('input.size')
let resize = document.querySelector('button.resize')
let box = document.querySelector('.box')
let constant = document.querySelector('.sat.constant')
let increasing = document.querySelector('.sat.increasing')
let saturation = 0.05;

function buildSquareGrid(side){
    container.innerHTML = ''
    let area = side * side;
    for(let i = 0; i < area; i++){
        let box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `${600/side}px`
        box.style.height = `${600/side}px`
        box.style.opacity = "0.05";
        container.appendChild(box)
        }
    opacity(saturation)
    
}

function opacity(value){let allBox = document.querySelectorAll('.box')
    allBox.forEach((allBox) => {
        allBox.addEventListener("mouseover",() => {
            allBox.style.backgroundColor = randomizeRGB()
            let opacity = parseFloat(allBox.style.opacity)
            if(opacity < 1 && value > 0){
                allBox.style.opacity = (opacity + value).toString();
            }
            
        })
    })
    }
function randomizeRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid(){
    let allBox = document.querySelectorAll('.box')
    allBox.forEach((allBox) => {
        allBox.style.backgroundColor = 'whitesmoke';
        allBox.style.opacity = "0.05";
    })
}

resize.addEventListener('click', () => {
    buildSquareGrid(size.value)
})

constant.addEventListener('click', () => {
    constant.style.backgroundColor = 'dimgrey'
    constant.style.color = 'whitesmoke'
    increasing.style.backgroundColor = 'whitesmoke'
    increasing.style.color = 'dimgrey'
    saturation = 0;
    buildSquareGrid(size.value)
})

increasing.addEventListener('click', () => {
    increasing.style.backgroundColor = 'dimgrey'
    increasing.style.color = 'whitesmoke'
    constant.style.backgroundColor = 'whitesmoke'
    constant.style.color = 'dimgrey'
    saturation = 0.05;
    buildSquareGrid(size.value)
})

buildSquareGrid(9)