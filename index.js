const express = require("express");
const app = express();
const config = require("./src/config/config.js");
const rutaslibro = require('./src/router/router.js');
const port = process.env.PORT || 5000 ||config.server.port
app.use(express.json());
app.use("/api", rutaslibro);
app.listen(port,() => {
    console.log("servidor arriba")
})