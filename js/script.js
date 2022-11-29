function createGrid(size = 16){
    let container = document.querySelector(".container");
    
    for(let i = 0; i<size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<size; j++){
            let box = document.createElement("div");
            box.classList.add("indv", "unclicked");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
    let boxes = document.querySelectorAll(".indv");

    boxes.forEach((item) => {item.addEventListener('mouseover', onHover)});
    boxes.forEach((item) => {item.addEventListener('drag', onDrag)});
}

function resetGrid(){
    let container = document.querySelector(".container");
    container.innerHTML = '';
    createGrid();
}

function onHover(e){
    let name = e.target.className;
    let classes = name.split(' ');
    let target = classes[1];
    this.classList.remove(target);
    this.classList.add('clicked');
}

function onDrag(e){
    let name = e.target.className;
    let classes = name.split(' ');
    let target = classes[1];
    this.classList.remove(target);
    this.classList.add('clicked');
}

createGrid();

let btn = document.querySelector("#reset");
btn.addEventListener('click',resetGrid);
