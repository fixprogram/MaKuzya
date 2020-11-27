import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { renderCell } from "./renderCell";
import { handleCoincidence } from "../../misc/utils";
import { drawDotsAndConnect } from "./drawDotsAndConnect";
import { drawParams } from "./drawParams";

const CellField = ({ charts, width = 700, height = 350 }) => {
  const canvasRef = useRef(null);
  console.log(charts);
  const { coordinates, params } = charts;
  const [active, setActive] = useState(
    new Array(coordinates.length).fill(false)
  );
  const cellHeight = 30;
  const cellWidth = 30;

  const draw = (ctx, frameCount) => {
    for (let top = 30; top < width; top += cellWidth) {
      for (let left = 0; left < height - 30; left += cellHeight) {
        renderCell(top, left, cellHeight, cellWidth, ctx);
      }
    }

    drawDotsAndConnect(ctx, coordinates, frameCount, active);

    drawParams(ctx, params);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, active]);

  function handleClick(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left - 8);
    const coincidence = coordinates.filter((c) => handleCoincidence(c.left, x));

    if (coincidence.length > 0) {
      const index = coordinates.findIndex(
        (c) => c.left === coincidence[0].left
      );
      setActive([...active.slice(0, index), true, ...active.slice(index + 1)]);
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};

const mapStateToProps = (state) => ({
  charts: state.charts,
});

export default connect(mapStateToProps)(CellField);
