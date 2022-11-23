let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse);

function otherMouse(dataReceived) {
  fill(dataReceived.r, dataReceived.g, dataReceived.b);
  circle(dataReceived.x, dataReceived.y, 10);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    r: myR,
    g: myG,
    b: myB,
  };

  clientSocket.emit("mouse", message);
}

let myR;
let myG;
let myB;

function setup() {
  createCanvas(windowWidth, windowHeight);

  myR = random(255);
  myG = random(255);
  myB = random(255);
}

function draw() {
  fill(myR, myG, myB);
  text("helloooooooo", mouseX, mouseY);
}
