const browserParams = new URLSearchParams(window.location.search);
const id = browserParams.get("id");
const game = games.find((game) => {
    return game.id === id
});

const gameImage = document.getElementById("game-image")
const gameName = document.getElementById("game-name");
const gameDev = document.getElementById("game-dev");
const gameRelease = document.getElementById("game-release");
const gameGenre = document.getElementById("game-genre");
const gameDescript = document.getElementById("game-descript");

gameImage.src = game.image;
gameName.textContent = game.name;
gameDev.textContent = game.dev;
gameRelease.textContent = "Release Date: " + game.release
gameGenre.textContent = "Genre: " + game.genre;
gameDescript.textContent = game.descript;