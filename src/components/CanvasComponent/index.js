import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

const CanvasComponent = ({ canvasData, width = 700, height = 350 }) => {
  const canvasRef = useRef(null);

  const draw = (ctx, sides, coordinates) => {
    let sideNumsCoordinates = [];

    coordinates.forEach((el, i, arr) => {
      ctx.beginPath();
      ctx.strokeStyle = "#1cb0f6";
      ctx.moveTo(el.x, el.y);
      if (arr[i + 1]) {
        ctx.lineTo(arr[i + 1].x, arr[i + 1].y);
        sideNumsCoordinates.push({
          x: (el.x + arr[i + 1].x) / 2,
          y: (el.y + arr[i + 1].y) / 2,
        });
      } else {
        ctx.lineTo(arr[0].x, arr[0].y);
        sideNumsCoordinates.push({
          x: (el.x + arr[0].x) / 2,
          y: (el.y + arr[0].y) / 2,
        });
      }
      ctx.stroke();
    });

    coordinates.forEach((el) => {
      ctx.font = "bold 30px Arial";
      ctx.strokeStyle = "black";
      ctx.fillText(`${el.letter}`, el.x, el.y + 30);
    });

    sides.forEach((side, i) => {
      ctx.font = "bold 25px Arial";
      ctx.strokeStyle = "black";
      ctx.fillText(
        `${side}`,
        sideNumsCoordinates[i].x,
        sideNumsCoordinates[i].y
      );
    });
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const { sides, coordinates } = canvasData;

    draw(context, sides, coordinates);
  }, [draw]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

const mapStateToProps = (state) => ({
  canvasData: state.practice.currentTask.canvasData,
});

export default connect(mapStateToProps)(CanvasComponent);
