let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  text("helloooooooo", mouseX, mouseY);
}
