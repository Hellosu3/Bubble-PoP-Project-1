
    let p1Btn = document.getElementById("p1");
    let p2Btn = document.getElementById("p2");
    let resetBtn = document.getElementById("reset");
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let scoreDisplay = document.querySelector("p span");
    
    let p1Score = 0;
    let p2Score = 0;
    let gameOver = false;
    let score = 50;
    
    function reset() {
        p1Score = player1.textContent = p2Score = player2.textContent = 0;
        player1.classList.remove("winner");
        player2.classList.remove("winner");
        gameOver = false;
    }
    
    p1Btn.addEventListener("click", function(){
        if(!gameOver) {
            p1Score++;
            if(p1Score === score) {
                gameOver = true;
                player1.classList.add("winner");
            }
            player1.textContent = p1Score;
        }
    });
    p2Btn.addEventListener("click", function(){
        if(!gameOver) {
            p2Score++;
            if(p2Score === score) {
                gameOver = true;
                player2.classList.add("winner");
            }
            player2.textContent = p2Score;
        }
    });
    resetBtn.addEventListener("click", function() {
        reset();
    });
    numInput.addEventListener("change", function() {
        score = scoreDisplay.textContent = Number(this.value);
        reset();
    });
        