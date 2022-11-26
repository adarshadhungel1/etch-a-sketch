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
}

function onHover(e){
    return;
}

function onDrag(e){
    console.log(e.target.className);
}

createGrid();

let boxes = document.querySelectorAll(".indv");

boxes.forEach((item) => {item.addEventListener('mouseover', onHover)});
boxes.forEach((item) => {item.addEventListener('drag', onDrag)});
