export const enemies = [];

export function spawnEnemy(x, y) {
    enemies.push({ x, y, size: 30, color: 'red' });
}

export function updateEnemies() {
    enemies.forEach(e => {
        e.x += (Math.random() - 0.5) * 2;
        e.y += (Math.random() - 0.5) * 2;
    });
}
