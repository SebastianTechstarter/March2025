const express = require("express");
const app = express();

const generateName = require("sillyname")
const sillyName = generateName();

app.get("/", (req, res) => {
    res.send("Willkommen bei meiner eigenen API!");
});

app.get("/data", (req, res) => {
    res.json([
        {id:1, name: "Max"},
        {id:2, name: "Lena"}
    ]);
});

app.get("/randomname", (req, res) => {
    res.send("Random Name: " + sillyName);
})

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});

