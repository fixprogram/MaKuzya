import React from "react";
import { connect } from "react-redux";
import { renderCell } from "./renderCell";

class CellField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();

    this.canvasHeight = 350;
    this.canvasWidth = 700;
    this.cellHeight = 30;
    this.cellWidth = 30;
  }

  componentDidMount() {
    const { coordinates, params } = this.props.charts;
    this.updateCanvas(coordinates, params);
  }

  updateCanvas(coordinates, params) {
    const context = this.canvas.current.getContext("2d");

    for (let top = 30; top < this.canvasWidth; top += this.cellWidth) {
      for (
        let left = 0;
        left < this.canvasHeight - 30;
        left += this.cellHeight
      ) {
        renderCell(top, left, this.cellHeight, this.cellWidth, context);
      }
    }

    context.fillStyle = "red";
    context.strokeStyle = "#000";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(coordinates[0].left + 8, coordinates[0].top + 8);

    coordinates.forEach((dot) => {
      context.lineTo(dot.left + 8, dot.top + 8);
    });
    context.stroke();

    coordinates.forEach((dot) => {
      context.fillRect(dot.left, dot.top, 16, 16);
    });

    context.font = "20px Georgia";
    context.strokeStyle = "#3c3c3c";

    params.x.forEach((param, i) => {
      context.strokeText(`${param}`, 50 + 30 * i, 340);
    });

    params.y.forEach((param, i) => {
      context.strokeText(`${param}`, 0, 300 - 30 * i);
    });
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={this.canvasWidth}
        height={this.canvasHeight}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  charts: state.charts,
});

export default connect(mapStateToProps)(CellField);

// Взаимодействие
// var filling = false

// function fillCellAtPositionIfNeeded(x, y, fillingMode) {
// 	var cellUnderCursor = getCellByPosition(x, y)
// 	if (cellUnderCursor.solid !== fillingMode) {
// 		cellUnderCursor.fill(fillingMode)
// 	}
// 	cell.drawBorder()
// }
// function handleMouseDown(event) {
// 	// нужно вычислить координаты клика относительно верхнего левого края canvas
// 	// это делается с использованием вычисления координат канваса и кроссбраузерных свойств объекта event
// 	// я использую некроссбраузерные свойства объекта событий
// 	filling = !getCellByPosition(event.layerX, event.layerY).solid
// 	fillCellAtPositionIfNeeded(event.layerX, event.layerY, filling)

// 	canvas.addEventListener('mousemove', handleMouseMove, false)
// }

// function handleMouseUp() {
// 	canvas.removeEventListener('mousemove', handleMouseMove)
// }

// function handleMouseMove(event) {
// 	fillCellAtPositionIfNeeded(event.layerX, event.layerY, filling)
// }

// canvas.addEventListener('mousedown', handleMouseDown, false)
// canvas.addEventListener('mouseup', handleMouseUp, false)
