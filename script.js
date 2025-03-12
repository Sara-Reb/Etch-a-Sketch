const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid");

const INITIAL_SIZE = 16;

createGrid(INITIAL_SIZE);

// Create grid of square divs
function createGrid(size) {
  const maxSize = container.clientWidth;
  squareSize = maxSize / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute(
        "style",
        `width:${squareSize}px; height:${squareSize}px;`
      );
      square.style.hov;
      container.appendChild(square);
    }
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList == "square") {
    rgba = getRgba(e);
    console.log(rgba);
    if (rgba.toString() == [0, 0, 0, 0].toString()) {
      newRgba = generateRandomRgba(rgba);
    } else {
      newRgba = rgba;
      if (newRgba[3] < 1) {
        newRgba[3] += 0.1;
      }
    }
    console.log(newRgba.toString());
    e.target.style.backgroundColor = `rgba(${newRgba})`;
  }
});

gridButton.addEventListener("click", (e) => {
  let size;
  do {
    size = prompt("number of squares per side (max 100): ");
  } while (size > 100);
  container.innerHTML = "";
  createGrid(size);
});

function getRgba(e) {
  const currentBackgroundColor = getComputedStyle(e.target)["background-color"];
  let rgba = currentBackgroundColor.slice(
    currentBackgroundColor.indexOf("(") + 1,
    -1
  );
  rgba = rgba.split(",").map(Number);
  return rgba;
}

function generateRandomRgba(rgba) {
  for (let i = 0; i < rgba.length; i++) {
    if (i === 3) {
      rgba[i] = 0.1;
      break;
    }
    rgba[i] = Math.round(Math.random() * 255);
  }
  return rgba;
}
