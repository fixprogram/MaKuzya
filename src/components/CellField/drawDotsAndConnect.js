export function drawDotsAndConnect(ctx, coordinates, frameCount, active) {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(coordinates[0].left + 8, coordinates[0].top + 8);

  coordinates.forEach((dot) => {
    ctx.lineTo(dot.left + 8, dot.top + 8);
  });
  ctx.stroke();

  coordinates.forEach((dot, i) => {
    // ctx.fillRect(dot.left, dot.top, 16, 16);
    ctx.beginPath();
    if (active[i]) {
      ctx.fillStyle = "green";
      ctx.arc(dot.left + 8, dot.top + 8, 10, 0, 2 * Math.PI);
    } else {
      ctx.fillStyle = "#000000";
      ctx.arc(
        dot.left + 8,
        dot.top + 8,
        12 * Math.sin(frameCount * 0.05) ** 2,
        0,
        2 * Math.PI
      );
    }
    ctx.fill();
  });
}
