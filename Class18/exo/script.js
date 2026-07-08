const players = [
    { name: "Messi", country: "Argentina", number: 10 },
    { name: "Mbappé", country: "France", number: 10 },
    { name: "Endo", country: "Japan", number: 6 }
];

const playersContainer = document.getElementById("players-container");
function createPlayerCard(player) {

    const playerTemplate = document.getElementById("player-template");
    const clone = playerTemplate.content.cloneNode(true);
    clone.querySelector(".player-name").textContent = player.name;
    clone.querySelector(".player-country").textContent = `Country: ${player.country}`;
    clone.querySelector(".player-number").textContent = `Number: #${player.number}`;
    
    return clone;
}
players.forEach((player) => {

    const newPlayerCard = createPlayerCard(player);
    
    playersContainer.appendChild(newPlayerCard);
});
