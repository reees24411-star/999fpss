import { player, movePlayer } from './player.js';
import { enemies, spawnEnemy, updateEnemies } from './enemy.js';
import { drawUI } from './ui.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let moveX = 0, moveY = 0;
const bullets = [];

const joystick = document.getElementById('joystick');

joystick.addEventListener('touchmove', e => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = joystick.getBoundingClientRect();
    moveX = (touch.clientX - rect.left - rect.width/2)/50;
    moveY = (touch.clientY - rect.top - rect.height/2)/50;
});
joystick.addEventListener('touchend', e => { moveX = 0; moveY = 0; });

canvas.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    const dx = (touch.clientX - player.x)/20;
    const dy = (touch.clientY - player.y)/20;
    bullets.push({ x: player.x, y: player.y, dx, dy, size: 10, color:'yellow' });
});

function update() {
    movePlayer(moveX, moveY);
    bullets.forEach(b => { b.x += b.dx; b.y += b.dy; });
    updateEnemies();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.size/2, player.y - player.size/2, player.size, player.size);
    
    // Bullets
    bullets.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x - b.size/2, b.y - b.size/2, b.size, b.size);
    });
    
    // Enemies
    enemies.forEach(e => {
        ctx.fillStyle = e.color;
        ctx.fillRect(e.x - e.size/2, e.y - e.size/2, e.size, e.size);
    });
    
    drawUI(ctx, player);
}

// Spawn enemies
for (let i=0; i<50; i++) {
    spawnEnemy(Math.random()*canvas.width, Math.random()*canvas.height);
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop();
