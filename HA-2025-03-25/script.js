
/*
function searchCharacter() {
    const input = document.getElementById("userInput").value;

    fetch("https://swapi.dev/api/people?search=" + input)
        .then(res => res.json())
        .then(data => {
            const firstResult = data.results[0]
            const nameElement = document.createElement("h1")
            nameElement.innerText = firstResult.name

            const heightElement = document.createElement("p")
            heightElement.innerText = "ist so groß: " + firstResult.height

            output.appendChild(nameElement)
            output.appendChild(heightElement)
        });
}
*/

/*const button = document.getElementById("searchButton")
button.addEventListener("click", searchCharacter)*/



fetch("https://swapi.dev/api/people/1/")

    .then((res) => res.json())
    .then((data) => {
        const character = document.getElementById("output");
        character.innerHTML = `<h2>${data.name}</h2>
            <p>Größe: ${data.height} cm</p>
            <p>Gewicht: ${data.mass} kg</p>
            <p>Haarfarbe: ${data.hair_color}</p>
            <p>Augenfarbe: ${data.eye_color}</p>`;
        

        fetch(data.homeworld)
            .then((res) => res.json())
            .then((planet) => {
            const newPlanet = document.createElement("p");
            newPlanet.textContent = `Heimatplanet: ${planet.name}`;
            character.appendChild(newPlanet)
            });
    })