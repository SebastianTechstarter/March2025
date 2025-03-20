alert ("Willkommen, Abenteurer!");
let myName = prompt("Wie lautet Dein Name?");
alert (`"Sei gegrüßt, ${myName}"`);
let myClass = prompt (`"Welche Klasse möchtest Du Spielen, ${myName}? (Krieger/Schurke/Magier)"`);

if (myClass == "Krieger") {
    alert ("Du hast Dich für den starken Krieger entschieden.")
}

else if (myClass == "Schurke") {
    alert ("Du hast Dich für den geschickten Schurken entschieden.")
}

else if (myClass == "Magier") {
    alert ("Du hast Dich für den weisen Magier entschieden")
}

else {
    alert ("Wähle bitte eine der drei Klassen")
}