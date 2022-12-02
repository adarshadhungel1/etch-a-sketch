function createGrid(size = 60){
    let container = document.querySelector(".container");
    for(let i = 0; i<size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<size; j++){
            let box = document.createElement("div");
            box.classList.add("indv", "unclicked");
            box.setAttribute('id', 'forDimension');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
    let dimension = 600/size; //dimension of a box = dimension of grid divided by no of boxes
    let boxes = document.querySelectorAll(".indv");
    boxes.forEach((item) => {item.addEventListener('mouseover', onHover)});
    boxes.forEach((item) => {item.style.height=dimension+'px'});
    boxes.forEach((item) => {item.style.width=dimension+'px'});
}

function reset(){
    let container = document.querySelector(".container");
    container.innerHTML = '';
    createGrid();
}

function resetGrid(){
    let container = document.querySelector(".container");
    container.innerHTML = '';
    createGrid(arguments[0]);
    
}

function onHover(e){
    let name = e.target.className;
    let classes = name.split(' ');
    let target = classes[1];
    this.classList.remove(target);
    this.classList.add('clicked');

    if (rainbowcolor){
        this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    else{
        this.style.backgroundColor = 'black';
    }
    
}

function uservalue(){
    if (parseInt(document.getElementById("number").value) <= 100 && parseInt(document.getElementById("number").value) >= 40){
        resetGrid(parseInt(document.getElementById("number").value));
    }
    else {
        alert('Nope!!');
    }
}

createGrid();

let rainbowcolor = false;
let resetbtn = document.querySelector("#reset");
let userValuebtn = document.querySelector("#change");
let rainbtn = document.querySelector("#rainbow");
let normalbtn = document.querySelector("#normal");  

resetbtn.addEventListener('click',reset);
userValuebtn.addEventListener('click', uservalue);
rainbtn.addEventListener('click',function(){rainbowcolor = true;})
normalbtn.addEventListener('click',function(){rainbowcolor = false;})