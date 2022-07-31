let board = document.getElementById("board");
let counter = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let button = document.createElement("button");
    if (counter % 2 === 0) {
      button.classList.add("light");
    } else {
      button.classList.add("dark");
    }
    board.appendChild(button);
    counter++;
  }
  board.appendChild(document.createElement("br"));
  counter++;
}
