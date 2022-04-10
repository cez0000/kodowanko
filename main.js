function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const player = document.querySelector('.paddle1');
const computer = document.querySelector('.paddle2');
const jarek = document.querySelector('img.jarek');
const playerScore = document.querySelector('div.score1');
const aiScore = document.querySelector('div.score2');
const btn = document.createElement("button");
const result = document.createElement("h1");
const jarekChoice = document.querySelector('img.jarekChoice');
const michasChoice = document.querySelector('img.michasChoice');
const babcia = document.querySelector('img.babcia')
let number = 0;
let number2 = 0


let jarekX = 400;
let jarekY = 250;
let playerY = 200;
let computerY = 200;

jarek.style.left = jarekX + 'px';
jarek.style.top = jarekY + 'px'
player.style.top = playerY + 'px';
computer.style.top = computerY + 'px';

let directionX = 'left';
let directionY = 'up'
const id = setInterval(() => {
    if (directionX === 'left') {
        jarekX -= 2;
    } else if (directionX === 'right') {
        jarekX += 2;
    }

    if (jarekX === 30 && playerY - 80 < jarekY && playerY + 80 > jarekY) {
        directionX = 'right';
    } else if (jarekX === 30) {
        console.log('GOL');
        number2++
        aiScore.innerText = number2;
        document.querySelector('div.gol').classList.add('active');
        if (number2 === 5) {
            document.body.appendChild(btn)
            btn.classList.add("restart");
            btn.textContent = "restart";

            function refresh() {
                location.reload()
            }
            btn.addEventListener('click', refresh);
            document.body.appendChild(result);
            result.classList.add("result")
            result.textContent = "YOU LOSE!"
            clearInterval(id)
        }

        setTimeout(function () {
            document.querySelector('div.gol').classList.remove("active")
        }, 3000);



        sleep(2000);
        jarekX = 400;
    } else if (jarekX === 720 && computerY - 80 < jarekY && computerY + 80 > jarekY) {
        directionX = 'left';
    } else if (jarekX === 720) {
        console.log('GOL');
        number++
        playerScore.innerText = number;
        document.querySelector('div.gol').classList.add('active');
        if (number === 5) {
            document.body.appendChild(btn)
            btn.classList.add("restart");
            btn.textContent = "restart";

            function refresh() {
                location.reload()
            }
            btn.addEventListener('click', refresh);
            document.body.appendChild(result);
            result.classList.add("result")
            result.textContent = "YOU WIN!"
            clearInterval(id)
        }


        setTimeout(function () {
            document.querySelector('div.gol').classList.remove("active")
        }, 3000);
        sleep(2000);
        jarekX = 400;
    }


    if (directionY === 'up') {
        jarekY -= 2;
        computerY -= 1;
    } else if (directionY === 'down') {
        jarekY += 2;
        computerY += 1;
    }

    if (jarekY === 20) {
        directionY = 'down';
    } else if (jarekY === 450) {
        directionY = 'up';
    }

    jarek.style.left = jarekX + 'px';
    jarek.style.top = jarekY + 'px';
    player.style.top = playerY +
        'px';
    computer.style.top = computerY + 'px';
}, 10)

document.addEventListener("keydown", (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
        playerY -= 10;
    } else if (e.code === 'KeyS' || e.code === 'ArrowDown') {
        playerY += 10;
    }

})
// Wybór głowy
function changeMichas() {
    jarek.src = "michas-removebg-preview.png"
}
michasChoice.addEventListener('click', changeMichas)

function changeJarek() {
    jarek.src = "jaraaa-removebg-preview (1).png"
}
jarekChoice.addEventListener('click', changeJarek)

function changeBabcia() {
    jarek.src = "babcia-removebg-preview.png"
}
babcia.addEventListener('click', changeBabcia)