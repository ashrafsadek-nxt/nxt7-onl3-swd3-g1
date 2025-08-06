function showDivs() {
  const container = document.querySelector(".container");
  const existingDivs = container.querySelectorAll("div");

  if (existingDivs.length >= 4) {
    return;
  }
  const colors = ["red", "green", "blue", "orange"];

  for (let i = 0; i < 4; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Box" + (i + 1);
    newDiv.style.backgroundColor = colors[i];
    container.appendChild(newDiv);
  }
}
