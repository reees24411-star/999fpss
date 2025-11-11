export function drawUI(ctx, player) {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Player X:${Math.round(player.x)} Y:${Math.round(player.y)}`, 10, 30);
}
