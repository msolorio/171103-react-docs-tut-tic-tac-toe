import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      squareVals: Array(9).fill(null),
      xIsNext: true
    };

    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    if (this.state.squareVals[index] !== null) return;
    const newSquareVals = this.state.squareVals.slice();
    newSquareVals[index] = this.state.xIsNext ? 'X' : 'O';

    this.setState((prevState) => ({
        squareVals: newSquareVals,
        xIsNext: !prevState.xIsNext
    }));
  }

  renderSquare(val, index) {
    const handleSquareClick = () => this.handleSquareClick(index);

    return (
      <Square value={val}
        onSquareClick={handleSquareClick}
        key={index}
      />
    );
  };

  render() {
    return (
      <div className="Board">
        <h2>Next Player: {this.state.xIsNext ? 'X' : 'O'}</h2>
        <div className="boardRow">
          {
            this.state.squareVals.map((squareVal, index) => {
              return this.renderSquare(squareVal, index)
            })
          }
        </div>

      </div>
    );
  }
}
