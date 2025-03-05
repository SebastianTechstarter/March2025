function onRegistr() {
  // Geforderte Felder werden befüllt: 
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatpassword = document.getElementById("repeatpassword").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

// Überprüfung, ob jedes Feld befüllt wurde:
// Überprüfung erfolgt mittels Booleschen Werts und dem Operater '||' (oder)
  if (!email || !password || !repeatpassword || !firstname || !lastname) {
    alert("Bitte alle erforderlichen Felder ausfüllen!");
    return;
  }

// Vergleich, ob Passwörter übereinstimmen:
  if (password !== repeatpassword) {
    alert("Die Passwörter stimmen nicht überein!");
    return;
  }

// E-Mail soll mindestens 3 Zeichen lang sein:
  if (email.length < 3) {
    alert("Zu kurz! Die E-Mail muss mindestens 3 Zeichen lang sein!");
    return;
  }

// Daten werden auf der Konsole geloggt und über den Alert ausgegeben:
  console.log("My Credentials", email, password, repeatpassword, firstname, lastname);
  alert(
    `Willkommen ${firstname} ${lastname}! Du wurdest erfolgreich mit ${email} und ${password} registriert.`
  );
}
