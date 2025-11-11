export const player = {
    x: 400,
    y: 300,
    size: 30,
    color: 'cyan',
    speed: 5
};

export function movePlayer(moveX, moveY) {
    player.x += moveX * player.speed;
    player.y += moveY * player.speed;
}
