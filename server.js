console.log("tutto funziona alla perfezione");

let express = require("express");

let app = express();

let port = 3000;

let server = app.listen(port);

app.use(express.static("public"));

console.log("questa roba gira su http://localhost:" + port);
