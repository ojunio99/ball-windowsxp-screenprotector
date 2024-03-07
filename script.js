const ball = document.getElementById('ball');
let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

function moveBall() {
  x += dx;
  y += dy;

  if (x >= window.innerWidth - 50 || x <= 0) {
    dx = -dx;
    changeColor();
  }

  if (y >= window.innerHeight - 50 || y <= 0) {
    dy = -dy;
    changeColor();
  }

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  requestAnimationFrame(moveBall);
}

function changeColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  ball.style.backgroundColor = randomColor;
}

moveBall();
