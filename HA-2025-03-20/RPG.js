alert ("Willkommen, Abenteurer!");
const newWorld = prompt ("Zuerst müssen wir die Welt benennen.")

let myName = prompt("Wie lautet Dein Name?");
alert (`"Sei gegrüßt, ${myName}"`);
let myClass = prompt (`"Welche Klasse möchtest Du Spielen, ${myName}? (Krieger/Schurke/Magier)"`);

if (myClass == "Krieger") {
    alert ("Du hast Dich für den starken Krieger entschieden.")
    let myArmor = prompt (`"Welche Rüstung möchtest Du tragen, ${myName}? (Mittelschwer / Schwer)"`);
        if (myArmor == "Mittelschwer") {
            alert ("Kluge Wahl. Du hast Dich also für eine mittlere Rüstung entschieden. Ein guter Mittelweg zwischen Schutz und Beweglichkeit");
        }
        else if (myArmor == "Schwer") {
            alert ("Gute Wahl. Mit schwerer Rüstung kannst Du nicht so leicht verletzt werden.")
        }
        else {
            alert ("Was ist das? Willst Du etwa nackt kämpfen?!")
        }
    let myWeapon = prompt (`"Was ist die Waffe Deiner Wahl, ${myName}? (Schwert_und_Schild / Doppelaxt)"`)
        if (myWeapon == "Schwert_und_Schild") {
            alert ("Die Wahl eines ehrenhaften Paladins: Die perfekte Balance zwischen Angriff und Verteidigung.")
        }
        else if (myWeapon == "Doppelaxt") {
            alert ("Du verlässt Dich also rein auf Deine Stärke. Angriff ist die beste Verteidigung, oder?")
        }
        else {
            alert ("Dein Ernst? Du lässt wohl gern die Fäuste sprechen.")
        }
}

else if (myClass == "Schurke") {
    alert ("Du hast Dich für den geschickten Schurken entschieden.")
    let myArmor = prompt (`"Welche Rüstung möchtest Du tragen, ${myName}? (Leicht / Kleidung)"`)
        if (myArmor == "Leicht") {
            alert ("Kluge Wahl. Du hast Dich also für eine leichte Rüstung entschieden. Etwas Schutz, aber maximale Beweglichkeit.")
        }
        else if (myArmor == "Kleidung") {
            alert ("Gute Wahl. Mit schwerer Rüstung kannst Du nicht so leicht verletzt werden.")
        }
        else {
            alert ("Was ist das? Willst Du etwa nackt auf die Reise gehen?!")
        }
    let myWeapon = prompt (`"Was ist die Waffe Deiner Wahl, ${myName}? (Kurzbogen / Dolch)"`)
        if (myWeapon == "Kurzbogen") {
            alert ("Du bist der klassische Jäger: Absolut tödlich auf Distanz.")
        }
        else if (myWeapon == "Dolch") {
            alert ("Du bist ein geschickter Meuchelmörder. Schnell, leise und absolut tödlich.")
        }
        else {
            alert ("Dein Ernst? Du lässt wohl gern die Fäuste sprechen.")
        }
}

else if (myClass == "Magier") {
    alert ("Du hast Dich für den weisen Magier entschieden")
    let myArmor = prompt (`"Als Magier ist eine sperrige Rüstung unter Deiner Würde, ${myName}. Dir bleibt die Wahl zwischen Kleidung in (blau) oder (schwarz)"`)
        if (myArmor == "blau") {
            alert ("Die blaue Robe ist ein Klassiker. Merlin wäre stolz.")
        }
        else if (myArmor == "schwarz") {
            alert ("Gute Wahl. Klassisch und elegant. Deine Erscheinung ist erfurchtgebietend.")
        }
        else {
            alert ("Was ist das? Willst Du etwa nackt kämpfen?!")
        }
    let myWeapon = prompt (`"Was ist die Waffe Deiner Wahl, ${myName}? (Langstab / Speer)"`)
        if (myWeapon == "Langstab") {
            alert ("Etwas vorhersehbar, aber okay. Ein Zauberer muss ja mit etwas herumfuchteln, oder?")
        }
        else if (myWeapon == "Speer") {
            alert ("Eine sehr unterschätzte Waffe und prima, um sich dmait die Gegner vom Leib zu halten.")
        }
        else {
            alert ("Dein Ernst? Du lässt wohl gern die Fäuste sprechen.")
        }
}

else {
    alert ("Wähle bitte eine der drei Klassen")
}

console.log (`"Fassen wir noch einmal zusammen: Du heißt ${myName} und bist ein ${myClass}. \n 
    Du trägst ${myArmor} und Deine Waffe ist ${myWeapon}."`)
alert (`"${myName}, Du bist nun bereit, Dich den Herausforderungen von ${newWorld} zu stellen!"`)