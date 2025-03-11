import express from "express";
const app = express();

// Index-Pfad, der "Hello World" zurückgibt.
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// gibt HTML als String zurück.
app.get("/content", (req, res) => {
    res.send("<h1>HTML-Objekt</h1>");
});

// gibt ein JSON-Objekt zurück.
app.get("/api/data", (req, res) => {
    res.json([
        {
            "ID": "User1",
            "name": "Sebastian", "age": 37,
        },
        {
            "ID": "User2",
            "name": "Christof", "age": 29,
        },
        {
            "ID": "User3",
            "name": "Mete", "age": 34,
        },
        {
            "ID": "User4",
            "name": "Joshua", "age": 31,
        }
    ]);
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});