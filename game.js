var prom = [];
var i;

for (let i = 0; i < 13; i++) {
  prom[i] = [];
  for (let j = 0; j < 13; j++) {
    prom[i][j] = 1;
  }
}

console.log(prom);

function update() {}

function keyup(key) {
  // Show the pressed keycode in the console
  console.log("Pressed", key);
}

function mouseup() {
  // Show coordinates of mouse on click
  console.log("Mouse clicked at", mouseX, mouseY);
  console.log(Math.floor(mouseX / 30));
  console.log(Math.floor(mouseY / 30));
  prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30)] =
    -prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30)];

  if (prom[Math.floor(mouseX / 30) - 1][Math.floor(mouseY / 30)] >= 0) {
    console.log("kurec");
    prom[Math.floor(mouseX / 30) - 1][Math.floor(mouseY / 30)] =
      -prom[Math.floor(mouseX / 30) - 1][Math.floor(mouseY / 30)];
  }
  if (prom[Math.floor(mouseX / 30) + 1][Math.floor(mouseY / 30)] <= 12) {
    prom[Math.floor(mouseX / 30) + 1][Math.floor(mouseY / 30)] =
      -prom[Math.floor(mouseX / 30) + 1][Math.floor(mouseY / 30)];
  }
  if (prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) + 1] < 13) {
    prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) + 1] =
      -prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) + 1];
  }
  if (prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) - 1] >= 0) {
    prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) - 1] =
      -prom[Math.floor(mouseX / 30)][Math.floor(mouseY / 30) - 1];
  }
}

function draw() {
  for (let j = 0; j < 13; j++) {
    for (let m = 0; m < 13; m++) {
      if (prom[j][m] == 1) {
        context.fillStyle = "black";
        context.fillRect(j * 30, m * 30, 29, 29);
      } else {
        context.fillStyle = "red";
        context.fillRect(j * 30, m * 30, 29, 29);
      }
    }
  }
}
