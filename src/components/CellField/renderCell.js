export const renderCell = (top, left, cellHeight, cellWidth, context) => {
  // запоминаем состояние закрашенности клетки
  context.fillStyle = "#fff";
  context.fillRect(top, left, cellWidth, cellHeight);

  context.beginPath();
  context.strokeStyle = "#3c3c3c";
  // magic. According to http://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry
  context.moveTo(top - 0.5, left - 0.5);
  context.lineTo(top - 0.5, left + cellWidth - 0.5);
  context.lineTo(top + cellHeight - 0.5, left + cellWidth - 0.5);
  context.lineTo(top + cellHeight - 0.5, left - 0.5);
  context.lineTo(top - 0.5, left - 0.5);
  context.stroke();
};
