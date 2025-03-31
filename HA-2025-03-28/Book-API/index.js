// Anforderungen:
//   1.    Datenstruktur als .json-Datei speichern (z. B. daten.json)
//   2.    Hilfsfunktionen: readData() und writeData()
//   3.    Implementiere folgende Routen:

const express = require("express");
const app = express();
const fs = require("fs");
const { title } = require("process");
app.use(express.json());

function readData() {
    const data = fs.readFileSync("daten.json", "utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync("daten.json", JSON.stringify(data, null, 2));
}

// GET /books
app.get("/books", (req, res) => {
    try {
        const books = readData();
        res.json(books);
    } catch (err) {
        res.status(500).json({error: `Internal Server Error: ${err}`});
    }
});

// POST /books
app.post("/books", (req, res) => {
    const books = readData();
    const {author, title} = req.body;

    // Validierung, um leere Felder zu vermeiden
    if (!(author && title)) {
        res.status(400).json({error: "Autor und Titel sind Pflichtfelder!"})
    }

    const bookTaken = books.find((book) => book.author== author && book.title == title);
    if (bookTaken) {
        res.status(400).json({error: "Es gibt bereits ein Buch mit diesem Autoren und diesem Titel"})
    }

    if(author && title) {
        const newBook = {
            id: books.length +1,
            author: author,
            title: title
        }
        books.push(newBook);
        writeData(books);
        res.status(201).json(newBook);
    }
    else {
        res.send("Eingabe unvollständig!")
    }
});

// PUT /books/:id
app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const books = readData();
    const newTitle = req.body.title;

    const foundBook = books.find(book => book.id == id);
    if(!foundBook) {
        res.send ("Buch nicht gefunden")
    }
    foundBook.title = newTitle;
    writeData(books);
    res.json(foundBook);
});

// DELETE /books/:id
app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    const books = readData();
    const index = books.findIndex(book => book.id ==id);

    if(index === -1) {
        res.send("Dieses Buch wurde nicht gefunden")
    }

    books.splice(index, 1);
    writeData(books);
    res.json();
    res.send("Buch gelöscht");
});

// Implementiere zusätzlich eine GET-Route mit einer Suchfunktion über Query-Parameter:
//   •    GET /books/search?titel=abc → z. B. Suche nach Kategorie, Art, Titel o. ä.
app.get("/books/search", (req, res) => {
    const {id, author, titel} = req.query;
    const books = readData();
    if (id) {
        filteredBooks = books.filter((book) => book.id.toLowerCase() == id)
    }
    if (author) {
        filteredBooks = books.filter((book) => book.author.toLowerCase() == author)
    }
    if (title) {
        filteredBooks = books.filter((book) => book.title.toLowerCase() == title)
    };

    res.json(filteredBooks);
});

// Zusatzaufgabe (optional)

// Baue eine Validierung ein: z. B. Name darf nicht leer sein, Alter muss eine Zahl sein, etc.
// Füge eine Logik ein, die verhindert, dass doppelte Namen gespeichert werden.

app.listen(5500, () => {
    console.log("Der Server läuft nun auf Port 5500")
});