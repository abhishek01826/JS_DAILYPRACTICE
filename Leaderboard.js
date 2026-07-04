// Leaderboard Object
let leaderboard = {
    Aman: 120,
    Ritik: 250,
    Priya: 180
};

// Function to add a new player
function addPlayer(name, score) {
    leaderboard[name] = score;
}

// Function to update a player's score
function updateScore(name, newScore) {
    if (leaderboard[name] !== undefined) {
        leaderboard[name] = newScore;
    } else {
        console.log("Player not found!");
    }
}

// Function to display leaderboard
function displayLeaderboard() {
    let sortedPlayers = Object.entries(leaderboard).sort((a, b) => b[1] - a[1]);

    console.log("🏆 Leaderboard");
    for (let i = 0; i < sortedPlayers.length; i++) {
        console.log(
            `${i + 1}. ${sortedPlayers[i][0]} - ${sortedPlayers[i][1]}`
        );
    }
}

// Add a new player
addPlayer("Rahul", 300);

// Update score
updateScore("Aman", 280);

// Display leaderboard
displayLeaderboard();