const searchInput = document.getElementById("game-search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.toLowerCase();
    
    const filteredGames = games.filter((game) => {
        return game.name.toLowerCase().includes(keyword);
    });
    renderGames(filteredGames);
});