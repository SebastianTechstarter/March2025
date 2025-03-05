function onLogin() {
  const emailTI = document.getElementById("emailti").value;
  const password = document.getElementById("passwordti").value;
  console.log("My Credentials", emailTI, password);
  alert(
    `Der Benutzer hat sich erfolgreich mit ${emailTI} und ${password} angemeldet.`
  );
}
