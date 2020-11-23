import React from "react";
import { connect } from "react-redux";

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { coordinates, sides } = this.props;
    const ctx = this.canvas.current.getContext("2d");
    let sideNumsCoordinates = [];

    coordinates.forEach((el, i, arr) => {
      console.log("EL: ", el);
      ctx.beginPath();
      ctx.strokeStyle = "#1cb0f6";
      // ctx.font = "bold 20px serif";
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
      ctx.strokeText(`${el.letter}`, el.x, el.y + 30);
    });

    sides.forEach((side, i) => {
      ctx.font = "bold 25px Arial";
      ctx.strokeStyle = "black";
      ctx.strokeText(
        `${side}`,
        sideNumsCoordinates[i].x,
        sideNumsCoordinates[i].y
      );
    });
  }

  render() {
    return <canvas ref={this.canvas} width={300} height={300} />;
  }
}

const mapStateToProps = (state) => ({
  coordinates: state.coordinates,
  sides: state.sides,
});

export default connect(mapStateToProps)(CanvasComponent);
