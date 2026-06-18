class TeamCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    getName() {
        return this.getAttribute("name");
    }
    getGroup() {
        return this.getAttribute("group");
    }
    getPoints() {
        return this.getAttribute("points");
    }
    getPlayed() {
        return this.getAttribute("played");
    }
    getGoalDifference() {
        return this.getAttribute("goal-difference");
    }
    isLeader(){

        return Number(this.getPoints()) >= 5;
    }

    renderStyle() {
        return `
            <style>
                .team-card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    max-width: 300px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                }                
                .team-poster {
                width: 100%;
                height: auto;
                border-radius: 8px;
                 }
                .team-title {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .team-info {
                    font-size: 1em;
                    margin-bottom: 8px;
                }
                .details-button {
                    background-color: #007BFF;  
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                }
                .details-button:hover {
                    background-color: #0056b3;  
                }
                .leader{
                 border: 3px solid green;
                }
            </style>
          
        `;
    }
    render() {
        const shadow = this.attachShadow({ mode: "open" });
        const isLeader = this.isLeader() ? "leader" : "";
        shadow.innerHTML = `
        ${this.renderStyle()}
        <div class="team-card ${isLeader}">
            <h2 class="team-title">${this.getName()}</h2>
            <p class="team-info">Group: ${this.getGroup()}</p>
            <p class="team-info">Points: ${this.getPoints()}</p>
            <p class="team-info">Played: ${this.getPlayed()}</p>
            <p class="team-info">Goal Difference: ${this.getGoalDifference()}</p>
            <button class="details-button">View Details</button>
        </div>
     `;
     const button =
    shadow.querySelector(
        ".details-button"
    );

button.addEventListener("click", () => {

    const details =
        document.getElementById(
            "details-container"
        );

    details.innerHTML = `
        <h3>${this.getName()}</h3>
        <p>Group: ${this.getGroup()}</p>
        <p>Points: ${this.getPoints()}</p>
        <p>Played: ${this.getPlayed()}</p>
        <p>Goal Difference:
            ${this.getGoalDifference()}
        </p>
    `;
});
    }
}
customElements.define("team-card", TeamCard);

