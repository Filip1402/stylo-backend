const express = require("express")
require("dotenv").config()

const server = express()
const port = process.env.PORT || 8080;

server.get("/", (req, res) => {
    res.json({message: "Hello world!"})
})

server.listen(port, () => {
    console.log("Server listening on port " + port)
})