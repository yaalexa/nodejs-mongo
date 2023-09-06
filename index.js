const express = require("express");
const app = express();
const config = require("./src/config/config.js");
const rutaslibro=require('./src/router/router.js')
app.use(express.json());
app.use("/api", rutaslibro);
app.listen(config.server.port,() => {
    console.log("servidor arriba")
})