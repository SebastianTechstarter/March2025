function newGame () {
    let container = document.getElementById("inputContent");
    container.innerHTML = `
    <p>Wie soll die Welt heißen?</p>
    <input type="text" id="worldInput" placeholder="Name der Welt"/>
    <button onclick="setWorld()">Speichern</button>`;
}

function setWorld() {
    let worldName = document.getElementById("worldInput").value;
    document.getElementById("worldName").textContent = worldName;

    document.getElementById("inputContent").innerHTML = `
        <p>Gib bitte Deinen Namen ein:</p>
        <input type="text" id="nameInput" placeholder="Dein Name"/>
        <button onclick="setName()">Speichern</button>
    `;
}

function setName() {
    let myName = document.getElementById("nameInput").value;
    document.getElementById("charName").textContent = myName;

    document.getElementById("inputContent").innerHTML = `
        <p>Welche Klasse möchtest Du spielen, ${myName}?</p>
        <select id="classInput">
            <option value="">-- Wähle eine Klasse --</option>
            <option value="Krieger">Krieger</option>
            <option value="Schurke">Schurke</option>
            <option value="Magier">Magier</option>
        </select>
        <button onclick="setClass()">Speichern</button>
    `;
}

function setClass() {
    let myClass = document.getElementById("classInput").value;
    document.getElementById("charClass").textContent = myClass;

    let armorOptions = "";
    if (myClass === "Krieger") {
        armorOptions = `<option value="Mittelschwer">Mittlere Rüstung</option>
                        <option value="Schwer">Schwere Rüstung</option>`;
    } else if (myClass === "Schurke") {
        armorOptions = `<option value="Leicht">Leichte Rüstung</option>
                        <option value="Kleidung">Ungerüstet</option>`;
    } else if (myClass === "Magier") {
        armorOptions = `<option value="Blau">Blaue Robe</option>
                        <option value="Schwarz">Schwarze Robe</option>`;
    }

    document.getElementById("inputContent").innerHTML = `
        <p>Welche Rüstung möchtest Du tragen?</p>
        <select id="armorInput">${armorOptions}</select>
        <button onclick="setArmor()">Speichern</button>
    `;
}

function setArmor() {
    let myArmor = document.getElementById("armorInput").value;
    document.getElementById("charArmor").textContent = myArmor;

    let myClass = document.getElementById("charClass").textContent;
    let weaponOptions = "";

    if (myClass === "Krieger") {
        weaponOptions = `<option value="Schwert_und_Schild">Schwert und Schild</option>
                        <option value="Doppelaxt">Doppelaxt</option>`;
    } else if (myClass === "Schurke") {
        weaponOptions = `<option value="Kurzbogen">Kurzbogen</option>
                         <option value="Dolch">Dolch</option>`;
    } else if (myClass === "Magier") {
        weaponOptions = `<option value="Langstab">Langstab</option>
                         <option value="Speer">Speer</option>`;
    }

    document.getElementById("inputContent").innerHTML = `
        <p>Welche Waffe möchtest Du wählen?</p>
        <select id="weaponInput">${weaponOptions}</select>
        <button onclick="setWeapon()">Speichern</button>
    `;
}

function setWeapon() {
    let myWeapon = document.getElementById("weaponInput").value;
    document.getElementById("charWeapon").textContent = myWeapon;

    document.getElementById("inputContent").innerHTML = `
        <p>Du hast Deinen Charakter erfolgreich erstellt!</p>
        <p><b>${document.getElementById("charName").textContent}</b>, Du bist bereit für Abenteuer in <b>${document.getElementById("worldName").textContent}</b>!</p>
        <button onclick="newGame()">Neues Spiel starten</button>
    `;    
}