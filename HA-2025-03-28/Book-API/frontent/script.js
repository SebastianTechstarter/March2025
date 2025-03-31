const form = document.getElementById("form");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const answer = document.getElementById("antwort")
const submit = document.getElementById("submit");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    try {
        fetch("http://localhost:5500/books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                author: authorInput.value, 
                title: titleInput.value})
        })  .then(res => res.json())
            .then(data => {
                answer.innerText = JSON.stringify(data, null, 2)
                console.log(data)
        });
    } catch (err) {
        console.log("Fehler bei Fetch: " + err)
    }
});

window.onload = () => {
    fetch("http://localhost:5500/books")
        .then(res => res.json())
        .then(data => {
            answer.innerText = JSON.stringify(data, null, 2);
        });
};


// Büchersuche

    fetch(`http://localhost:5500/books/search?title=${encodeURIComponent(searchValue)}`)
        // method: "GET" - Wird das benötigt?
        .then(res => {
            if (!res.ok) {
                throw new Error("Fehler bei der Anfrage!");
            }
            return res.json();
        })
        .then(data => {
            if (data.length === 0) {
                answer.innerText = "Kein Buch gefunden!";
            } else {
                answer.innerText = `Gefundene Bücher: \n${JSON.stringify(data, null, 2)}`;
            }
        })
        .catch(err => {
            answer.innerText = `Fehler: ${err.message}`;
        });

// Bücher löschen
function deleteBook(bookId) {
    if (!confirm("Möchtest du dieses Buch wirklich löschen?")) return;

    fetch(`http://localhost:5500/books/${bookId}`, { method: "DELETE" })
        .then(res => {
            if (!res.ok) {
                return res.text().then(err => { throw new Error(err); });
            }
            return res.text();
        })
        .then(message => {
            answer.innerText = `✅ ${message}`;
            console.log("Buch erfolgreich gelöscht!");
        })
        .catch(err => {
            answer.innerText = `❌ Fehler: ${err.message}`;
        });
}