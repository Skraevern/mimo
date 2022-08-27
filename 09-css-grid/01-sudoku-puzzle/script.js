const container = document.getElementById("container");

for (let i = 1; i <= 49; i++) {
  const div = document.createElement("div");
  let randomNumber = Math.floor(Math.random() * 10);
  div.classList.add("grid-item");
  if (randomNumber === 8 || randomNumber === 6) {
    randomNumber = Math.floor(Math.random() * 9) + 1;
    div.textContent = randomNumber;
  }
  container.appendChild(div);
}
