console.log("tutto funziona alla perfezione");

let express = require("express");
const { connected } = require("process");

let app = express();

let port = process.env.PORT || 3000;

let server = app.listen(port);

app.use(express.static("public"));

console.log("questa roba gira su http://localhost:" + port);

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);

  function mouseReceived(dataReceived) {
    console.log(dataReceived);
    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }

  newSocket.on("mouse", mouseReceived);
}
