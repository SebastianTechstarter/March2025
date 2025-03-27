const express = require("express");
const fs = require("fs");
const app = express();

const tiere = [
    {id:1, name: "Bello", art: "Hund", geschlecht: "M", alter: 3},
    {id:2, name: "Miez", art: "Katze", geschlecht: "W", alter: 5},
    {id:3, name: "Cosmo", art: "Hund", geschlecht: "M", alter: 4},
    {id:4, name: "Tjapka", art: "Hund", geschlecht: "W", alter: 10},
    {id:5, name: "Moritz", art: "Katze", geschlecht: "M", alter:8},
    {id:6, name: "Herbert", art: "Wellensittich", geschlecht: "M", alter:2},
];

//   1.    GET /tiere
//→ Gibt eine Liste aller Tiere zurück
app.get("/tiere", (req,res) => {
    res.json(tiere);
});

//   2.    GET /tiere/search?art=hund
//→ Filtert nach einer Tierart (z. B. Hund, Katze)
app.get("/tiere/search", (req, res) => {
    const art= req.query.art;
    const tierart = tiere.filter(tier => tier.art.toLowerCase() === art.toLowerCase());
    res.json(tierart);
})
//   3.    GET /tiere/:id
//→ Gibt nur das Tier mit der angegebenen ID zurück
app.get("/tiere/:id", (req, res) => {
    const tier = tiere.find(t => t.id === parseInt(req.params.id));
})
//   4.    POST /tiere
//→ Fügt ein neues Tier zur Liste hinzu (über JSON-Body)
app.post("/tiere", (req, res) => {
    const neuesTier = {id: tiere.length +1, ...req.body};
    tiere.push(neuesTier);
    res.status(201).json(neuesTier);
});


app.listen(5005, () => console.log("Der Server läuft auf Port 5005"));