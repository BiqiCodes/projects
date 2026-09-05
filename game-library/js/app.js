const gameList = document.getElementById("game-list");

function renderGames(gameArray) {
        let html = "";
        
        gameArray.forEach((game) => {
            html += `
                <div class="game-card">
                    <img src="${game.image}" alt="${game.name}">
                    
                    <div class="game-info">
                        <h3>${game.name}</h3>
                        <p>${game.genre}</p>
                        <a href="detail.html?id=${game.id}">Detail</a>
                    </div>
                </div>
         `;
    });

    gameList.innerHTML = html;
}
renderGames(games);
