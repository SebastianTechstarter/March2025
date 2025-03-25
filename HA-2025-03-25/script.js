
function searchCharacter() {
    const input = document.getElementById("userInput").value;

    fetch("https://swapi.dev/api/people?search=" + input)
        .then(res => res.json())
        .then(data => {
            const firstResult = data.results[0]
            const character = document.getElementById("output");
            character.innerHTML = `<h2>${firstResult.name}</h2>
            <p>Größe: ${firstResult.height} cm</p>
            <p>Gewicht: ${firstResult.mass} kg</p>
            <p>Haarfarbe: ${firstResult.hair_color}</p>
            <p>Augenfarbe: ${firstResult.eye_color}</p>`;
            fetch(firstResult.homeworld)
            .then((res) => res.json())
            .then((planet) => {
            const newPlanet = document.createElement("p");
            newPlanet.textContent = `Heimatplanet: ${planet.name}`;
            character.appendChild(newPlanet)
            });
            output.appendChild(nameElement)
            output.appendChild(heightElement)
        });
}

function searchShip() {
    const input = document.getElementById("shipInput").value;

    fetch("https://swapi.dev/api/starships?search=" + input)
        .then(res => res.json())
        .then(data => {
            const firstResult = data.results[0]
            const spaceShip = document.getElementById("output1");
            spaceShip.innerHTML = `<h2>${firstResult.name}</h2>
            <p>Model: ${firstResult.model}</p>
            <p>Hersteller: ${firstResult.manufacturer}</p>
            <p>Länge: ${firstResult.length} m</p>
            <p>Crew: ${firstResult.crew} Personen</p>
            <p>Passagiere: ${firstResult.passengers} Personen</p>`;
        });
} 


const peopleButton = document.getElementById("searchButton")
peopleButton.addEventListener("click", searchCharacter)
const shipButton = document.getElementById("shipSearchButton")
shipButton.addEventListener("click", searchShip)


/*
fetch("https://swapi.dev/api/people?search" + input)

    .then((res) => res.json())
    .then((data) => {
        const character = document.getElementById("output");
        character.innerHTML = `<h2>${data.name}</h2>
            <p>Größe: ${data.height} cm</p>
            <p>Gewicht: ${data.weight} kg</p>
            <p>Haarfarbe: ${data.hair_color}</p>
            <p>Augenfarbe: ${data.eye_color}</p>`;
        

        fetch(data.homeworld)
            .then((res) => res.json())
            .then((planet) => {
            const newPlanet = document.createElement("p");
            newPlanet.textContent = `Heimatplanet: ${planet.name}`;
            character.appendChild(newPlanet)
            });
    }); */