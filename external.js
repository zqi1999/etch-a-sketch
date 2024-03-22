const container = document.querySelector("#container");
const increase_button = document.querySelector("#increase_button");

function drawGrid(gridSize = 16) {
  const grid = document.createElement("div");
  grid.id = "grid";
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.id = `${i}-${j}`;
      if (i == gridSize - 1) {
        square.style.borderBottom = "5px solid black";
      }
      if (j == gridSize - 1) {
        square.style.borderRight = "5px solid black";
      }
      square.style.borderTop = "5px solid black";
      square.style.borderLeft = "5px solid black";
      square.style.width = "20px";
      square.style.height = "20px";
      square.style.opacity = "0.1";
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")";
        square.style.opacity = `${Number(square.style.opacity) + 0.1}`;
        console.log(square.style.opacity);
      });
      row.append(square);
    }
    grid.append(row);
    container.append(grid);
  }
}

function increase() {
  var size = prompt("new grid size");
  while (size < 0 || size > 100) {
    size = prompt("choose a size > 0 but <= 100");
  }
  const grid = document.querySelector("#grid");
  grid.remove();
  drawGrid(size);
  console.log(size);
}

drawGrid();

// document.addEventListener("mousemove", e => {
//     var mouseElement = document.elementFromPoint(e.pageX, e.pageY);
//     console.log(mouseElement);
//     mouseElement.style.backgroundColor = "red";
// }, {passive: true})
