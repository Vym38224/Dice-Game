document.addEventListener('DOMContentLoaded', function() {
    const player1 = document.querySelector('.player1');
    const player2 = document.querySelector('.player2');
    const player1Score = document.querySelector('.current-score1');
    const player2Score = document.querySelector('.current-score2');
    const player1SaveScore = document.querySelector('.save-score1');
    const player2SaveScore = document.querySelector('.save-score2');
    const btnRoll = document.querySelector('.btn-roll');
    const btnSave = document.querySelector('.btn-save');
    const btnNew = document.querySelector('.btn-new');
    const dice = document.querySelector('.dice');
    const diceRoll = document.querySelector('.dice-roll-animation');

    btnRoll.addEventListener('click', () => {
    
        diceRoll.classList.add('dice-roll-animation');
        setTimeout(() => {
            diceRoll.classList.remove('dice-roll-animation');
        }, 500); 
    });
    function setWinner(player) {
        player.innerHTML = "Vítěz";
        player.classList.remove('players-score');
        player.classList.add('win-player');
    }
    function setLoser(player) {
        player.innerHTML = "Poražený";
        player.classList.remove('players-score');
        player.classList.add('lose-player');
    }
    function setActivePlayer(player) {
        player1.classList.remove('players-score');
        player2.classList.remove('players-score');
        player1.classList.remove('win-player');
        player2.classList.remove('win-player');
        player1.classList.remove('lose-player');
        player2.classList.remove('lose-player');

        player.classList.add('players-score');
    }
    setActivePlayer(player1);

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;     
        return randomNumber;
    }
    if (btnRoll && dice) {
        btnRoll.addEventListener('click', function() {
            const randomNumber = rollDice();{
            if (Number(player1SaveScore.textContent) < 100 && Number(player2SaveScore.textContent) < 100){
                if(randomNumber === 1 && player1.classList.contains('players-score')){
                    dice.src = `none`;
                    player1Score.textContent = Number(0);
                    setActivePlayer(player2);
                } else if(randomNumber === 1 && player2.classList.contains('players-score')){
                    dice.src = `none`;
                    player2Score.textContent = Number(0);
                    setActivePlayer(player1);}           
                else {
                    dice.src = `podklady/dice${randomNumber}.png`;}
                    if (player1.classList.contains('players-score')  && Number(player1SaveScore.textContent) < 100) {
                        player1Score.textContent = Number(player1Score.textContent) + randomNumber;
                    } else if(player2.classList.contains('players-score') && Number(player2SaveScore.textContent) < 100){
                        player2Score.textContent = Number(player2Score.textContent) + randomNumber;}
                console.log(randomNumber);
            }}});
        }

    if (btnSave) {
        btnSave.addEventListener('click', function() {
            if (player1.classList.contains('players-score')) {
                player1SaveScore.textContent = Number(player1SaveScore.textContent) + Number(player1Score.textContent)
                player1Score.textContent = Number(0);
                dice.src = `none`;
                setActivePlayer(player2);
                if (Number(player1SaveScore.textContent) >= 100) {
                    dice.src = `none`;
                    setActivePlayer(player1)
                    setWinner(player1);
                    setLoser(player2);
                }
            } else if (player2.classList.contains('players-score')) {
                player2SaveScore.textContent = Number(player2SaveScore.textContent) + Number(player2Score.textContent)
                player2Score.textContent = Number(0);
                dice.src = `none`;
                setActivePlayer(player1);
                if (Number(player2SaveScore.textContent) >= 100) {
                    dice.src = `none`;
                    setActivePlayer(player2)
                    setWinner(player2);
                    setLoser(player1);
                }
            }});
    } else {
        console.error("Element not found. Ensure your HTML contains '.btn-save' class.");
    }

    if (btnNew) {
        btnNew.addEventListener('click', function() {
            player1Score.textContent = Number(0);
            player2Score.textContent = Number(0);
            player1SaveScore.textContent = Number(0);
            player2SaveScore.textContent = Number(0);
            dice.src = `none`;
            player1.innerHTML = "Hráč 1";
            player2.innerHTML = "Hráč 2";
            setActivePlayer(player1);
        });
    } else {
        console.error("Element not found. Ensure your HTML contains '.btn-new' class.");
    }
});

