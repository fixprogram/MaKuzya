export function drawParams(ctx, params) {
  ctx.font = "21px Open Sans";
  ctx.strokeStyle = "#3c3c3c";

  params.x.forEach((param, i) => {
    ctx.textAlign = "center";
    ctx.fillText(`${param}`, 60 + 30 * i, 350);
  });

  params.y.forEach((param, i) => {
    ctx.textAlign = "left";
    ctx.fillText(`${param}`, 0, 305 - 30 * i);
  });
}
