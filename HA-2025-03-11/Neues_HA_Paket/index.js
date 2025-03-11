import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// gibt HTML als String zurück
app.get("/content", (req, res) => {
    res.send("<h1>HTML-Objekt</h1>");
});

// gibt ein JSON-Objekt zurück
app.get("/api/data", (req, res) => {
    res.json();
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});