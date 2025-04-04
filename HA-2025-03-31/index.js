"API Base Template": {
    "prefix": "apibase",
    "body": [
        "const express = require(\"express\");",
        "const cors = require(\"cors\");",
        "const fs = require(\"fs\");",
        "const app = express();",
        "",
        "app.use(express.json());",
        "app.use(cors());",
        "",
        "function readFile(){",
        "    const data = fs.readFileSync(\"tiere.json\", \"utf-8\");",
        "    return JSON.parse(data);",
        "}",
        "",
        "function writeFile(data){",
        "    fs.writeFileSync(\"tiere.json\", JSON.stringify(data, null, 2)); // JSON.stringify wandelt ein Javascript Objekt in eine JSON Format um",
        "}",
        "",
        "app.listen(5000, () => {",
        "    console.log(\"Server is running on port 3000\");",
        "});"
    ],
    "description": "Grundgerüst für eine Express API mit Dateioperationen"
}
