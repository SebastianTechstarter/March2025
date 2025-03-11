import express from "express";
const app = express();
// app ist das Schlüsselwort, um das alles auszuführen.
// req = request
// res = response

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/christof", (req, res) => {
    res.send("Veränderung!");
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});
