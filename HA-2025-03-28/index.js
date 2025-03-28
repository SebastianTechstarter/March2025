
const express = require("express");
const app = express();
const fs  = require("fs"); // File System Modul, damit können wir Dateien lesen und schreiben
app.use(express.json()); // Unsere Middleware, die uns ermöglicht den Body aus dem Request auszulesen

// Hilfsfunktion
function readFile(){
    const data = fs.readFileSync("tiere.json", "utf-8");
    return JSON.parse(data);}

function writeFile(data){
    fs.writeFileSync("tiere.json", JSON.stringify(data,null,2)); // JSON.stringify wandelt ein Javascript Objekt in eine JSON Format um
}

app.get("/tiere", (req, res) => {
    const tiere = readFile();
    res.json(tiere);
});

app.post("/tiere" , (req,res) => {
    const tiere = readFile();
    const {name, art} = req.body
    
    if(name && art){
        const newTier = {
            id: tiere.length + 1, // besser (komplexere Logik) -> tiere.length > 0 ? Math.max(...tiere.map(a => a.id)) + 1 : 1;
            name: name,
            art: art
        }
        tiere.push(newTier)
        writeFile(tiere)
        res.status(201).json(newTier)
    }
    else {
        res.send("Daten unvollständig")
    }
});

app.put("/tiere/:id", (req,res) => {
    const id = req.params.id
    const tiere = readFile();
    const newTier = req.body.art

    const foundArt = tiere.find(tier => tier.id == id)
    foundArt.art = newArt
    res.json(foundArt)
    writeFile(tiere)
});

app.delete("/tiere/:id", (req,res) => {
    const id = req.params.id;
    const tiere = readFile();
    const index = tiere.findIndex(tier => tier.id == id);
    tiere.splice(index, 1);
    writeFile(tiere);
    res.json();
});

app.listen(5005, () => {
    console.log("Server läuft auf Port 5005")
});
