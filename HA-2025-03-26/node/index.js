/*const os = require("os")

console.log(os.version())
console.log(os.uptime())

const fs = require("fs")
const { CLIENT_RENEG_LIMIT } = require("tls")

fs.writeFile("message.txt", "Hallo, ich komme aus der index.js", (err) => {
    if (err) throw err;
    console.log("Die Datei wurde erstellt.")
})*/

let generateName = require("sillyName");
let sillyName = generateName();

console.log(sillyName)