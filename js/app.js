

const bubbles = ['one', 'two', 'three', 'four', 'five'];
const windowWidth = window.innerWidth;
const body = document.body;
const windowHeight = window.innerHeight;
const scores = document.querySelectorAll('.score');
let wontPop = 0;
const amount = 50;
let usedBubble = 0;
let gameOver2 = false;
const shadow = document.querySelector('.shadow');
const startBtn = document.querySelector('.start-btn');
const timer = document.querySelector('.timer');





 function generateBubble() {
    const div = document.createElement('div');
    let rand = Math.floor(Math.random() * bubbles.length * 4);
    div.className = `bubble bubble-${bubbles[rand % bubbles.length]}`;
    rand = Math.floor(Math.random() * (windowWidth - 150));
    div.style.left = `${rand}px`;

    div.dataset.number = usedBubble;
     usedBubble++;

    document.body.appendChild(div);

     makeBubble(div);
 }





function makeBubble(elem) {
    let position = 0;
    const random = Math.floor(Math.random() * 6 - 3);
    const interval = setInterval(frame, (2 - Math.floor(wontPop / 10) + random) / 2);

    function frame() {
        if (position >= (windowHeight + 150) && (document.querySelector(`[data-number="${elem.dataset.number}"]`) !== null)) {
            clearInterval(interval);
            gameOver2 = true;
        } else {
            position++;
            elem.style.top = `${windowHeight - position}px`;
        }
    }
}


function popBubble(elem) {
    elem.remove();
    wontPop++;
    scoreUpdate();

    const sound = document.getElementById("sound");
    sound.currentTime = 0;
    sound.play();
    
}

function scoreUpdate() {
    for (let i = 0; i < scores.length; i++) {
        scores[i].textContent = wontPop;
    }
}



function startGame() {
    restartGame();
    let timeRemaining = 20;
    let timeInterval = setInterval(function() {
        timer.textContent = timeRemaining.toFixed(0);
        timeRemaining--;
        if (timeRemaining < 0) {
            clearInterval(timeInterval);
            shadow.style.display = 'flex';
            shadow.querySelector('.loser').style.display = 'block';
        }
    }, 1000);
    let timeout = 0;
    let loop = setInterval(function() {
        timeout = Math.floor(Math.random() * 200 - 100);
        if (!gameOver2 && wontPop !== amount) {
            generateBubble();
        } else if (wontPop !== amount) {
            clearInterval(loop);
            clearInterval(timeInterval);
            shadow.style.display = 'flex';
            shadow.querySelector('.loser').style.display = 'block';
        } else {
            clearInterval(loop);
            clearInterval(timeInterval);
            shadow.style.display = 'flex';
            shadow.querySelector('.winner').style.display = 'block';
        }
    }, 800 + timeout);
}


function restartGame() {
    const forRemoving = document.querySelectorAll('.bubble');
    for (let i = 0; i < forRemoving.length; i++) {
        forRemoving[i].remove();
    }
    gameOver2 = false;
    wontPop = 0;
    scoreUpdate();
    
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('bubble')) {
        popBubble(event.target);
    
    } 
});

document.querySelector('.restart').addEventListener('click', () => {
    shadow.style.display = 'none';
    shadow.querySelector('.winner').style.display = 'none';
    shadow.querySelector('.loser').style.display = 'none';
    startGame();
});

document.querySelector('.cancel').addEventListener('click', () => {
    shadow.style.display = 'none';
});

startBtn.addEventListener('click', () => {
    startGame();
    document.querySelector('.press-game').style.display = 'none';
});

document.querySelector('.bubble').addEventListener('click', () => {
 sound.play();
});


function startGame() {
    restartGame();
    let timeRemaining = 20;
    let timeInterval = setInterval(function() {
    timer.textContent = timeRemaining.toFixed(0);
    timeRemaining--;
    if (timeRemaining < 0) {
    clearInterval(timeInterval);
    shadow.style.display = 'flex';
    shadow.querySelector('.loser').style.display = 'block';
    }
    }, 1000);
    let timeout = 0;
    let loop = setInterval(function() {
    timeout = Math.floor(Math.random() * 600 - 100);
    if (!gameOver2 && wontPop !== amount) {
    generateBubble();
    } else if (wontPop !== amount) {
    clearInterval(loop);
    clearInterval(timeInterval);
    shadow.style.display = 'flex';
    shadow.querySelector('.loser').style.display = 'block';
    } else {
    clearInterval(loop);
    clearInterval(timeInterval);
    shadow.style.display = 'flex';
    shadow.querySelector('.winner').style.display = 'block';
    }
    }, 800 + timeout);
    }

    



    

    