function createGrid(size = 16){
    let container = document.querySelector(".container");
    
    for(let i = 0; i<size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<size; j++){
            let box = document.createElement("div");
            box.classList.add("ind", "unclicked");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function onHover(){
    return;
}

function onClick(){
    return;
}

createGrid();