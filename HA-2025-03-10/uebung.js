// Schreibe eine Funktion createHTMLList(liste)
// Sie soll eine JS-Liste annehmen und daraus einen HTML-String für eine ungeordnete Liste (ul) machen

let myList= ["eins","zwei", "drei"]

function createHTMLList(liste) {
    let htmlElements = liste.map((listItem, index) => 
        `<li>${listItem} <button onclick="deleteItem(${index})">Eintrag löschen</button></li>`
    );
    return `<ul>${htmlElements.join("")}</ul>`; // Fügt alle Elemente zusammen
}    

function setListContent() {
    let listDiv=document.getElementById("Liste");
    let content = createHTMLList(myList);
    listDiv.innerHTML = content;
}

// Funktion, um eine ganze Liste, durch Kommata getrennt, hinzuzufügen.
function setUserInputList() {
    let userInput = document.getElementById("userInput");
    let text = userInput.value;
    let textList = text.split(",");
    myList = myList.concat(textList);
    setListContent();
}

// Funktion, um einen einzelnen Eintrag hinzuzufügen.
function soloInput() {
    let single = document.getElementById("singleInput");
    let newText = single.value;
    myList.push(newText);
    setListContent(); 
    single.value = "";
}

// Funktion, die den letztewn Eintrag löscht.
function killsLast() {
    myList.pop();
    setListContent();
}

// Funktion, die einzelne Elemente löschen kann.
function deleteItem(index) {
    if (index >= 0 && index < myList.length) { // Prüfen, ob der Index gültig ist
        myList.splice(index, 1); // Entfernt genau das gewählte Element
        setListContent(); // Aktualisiert die Liste
    }
}