
function updatePreis() {
    gesamt.textContent = `Gesamt: ${gesamtPreis.toFixed(2)}€`;

    // Budget hinzugefügt
    const budget = parseFloat(budgetInput.value);
    if (!isNaN(budget)) {
        const restBudget = budgetValue - gesamtPreis;
        restBudgetText.textContent = `Restliches Budget: ${restBudget.toFixed(2)}€`
        
        // Warnung vor Budget-Überschreitung
        if (restBudget < 0) {
            restBudgetText.style.color = "red";
            restBudgetText.textContent += "Budget überschritten!";
        }
        else {
            restBudgetText.style.color = "green";
        }
    }
}

function deleteAll(){
    liste.innerHTML = "";
    gesamtPreis = 0;
    updatePreis();
}

// Funktion zur Auswahl der Kategorie
function getEmoji(kategorie) {
    switch (kategorie) {
        case "Sonstiges":
            return "📜"
        case "Obst": 
            return "🍎";
        case "Gemüse":
            return "🥦";
        case "Gewürze":
            return "🌶️";
        case "Milchprodukte":
            return "🍼";
        case "Getreideprodukte":
            return "🍞";
        case "Tiefkühlprodukte":
            return "🧊";
    };
}

const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
// Dropdown-Menü Kategorie eingefügt
const kategorieInput = document.getElementById("kategorie")
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");
let counter;
let itemList = [];
let budgetValue = 0;
const budgetInput = document.getElementById("budget");

// Verknüpfung mit dem Restbudget
const restBudgetText = document.getElementById("restBudget");
budgetInput.addEventListener("input", () => {
    budgetValue = parseFloat(budgetInput.value) || 0;
    updatePreis();
});

// Verknüpfung mit dem Button "Alles löschen"
const deleteAllButton = document.getElementById("deleteAll");
deleteAllButton.addEventListener("click", deleteAll);

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
    
    const artikel = artikelInput.value;
    const anzahl = parseInt(anzahlInput.value);
    const preis = parseFloat(preisInput.value);
        if (preis < 0) {preisInput.value = 0;}
    const kategorie = kategorieInput.value;

    // Emoji für die Kategorie
    const kategorieEmoji = getEmoji(kategorie);

    const gesamtwert = anzahl * preis;

    // Neues Element erstellen und in die Liste einfügen
    const new_li = document.createElement("li");

    // Checkbox erstellen
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px"; // Abstand zwischen Checkbox und Text

    checkbox.addEventListener("change", () => {
        if (checkbox.checked ) {
            gesamtPreis += gesamtwert;
            updatePreis();
        } else{
            gesamtPreis -= gesamtwert;
            updatePreis();
        }
    });

    
    // Textinhalt des Listenelements
    const text = document.createTextNode(`${kategorieEmoji} ${anzahl} x ${artikel}: ${preis.toFixed(2)}€ p.P. ==> ${gesamtwert.toFixed(2)}€`);

    // Füge die Checkbox und den Text zum Listenelement hinzu
    new_li.appendChild(checkbox);
    new_li.appendChild(text);

    // Füge einen Löschen Button hinzu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px"; // Abstand zwischen Text und Button
    deleteButton.addEventListener("click", () => {
        liste.removeChild(new_li);
        if(checkbox.checked){
            gesamtPreis -= anzahl * preis;
            updatePreis();
        }else {

        }
       
    });
    new_li.appendChild(checkbox);
    new_li.appendChild(text);
    new_li.appendChild(deleteButton);
    liste.appendChild(new_li);
    // Gesamtpreis aktualisieren

    // Inputfelder leeren
    artikelInput.value = "";
    anzahlInput.value = "";
    preisInput.value = "";
    kategorieInput.value = "Sonstiges";
});

// Hinzufügen eines Elements mit der Enter-Taste
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addButton.click();
    }
});