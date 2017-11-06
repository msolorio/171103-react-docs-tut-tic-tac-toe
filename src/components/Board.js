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

  calculateWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const squareVals = this.state.squareVals;

    return winningCombos.reduce((winner, combo) => {
      const [a, b, c] = combo;
      if (squareVals[a] === squareVals[b] && squareVals[a] === squareVals[c]) {
        return squareVals[a];
      }
      return winner;
    }, null);
  }

  handleSquareClick(index) {
    if (this.calculateWinner()) return;

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
        key={index} />
    );
  };

  getMessage() {
    if (this.calculateWinner()) {
      return `Winner: ${this.calculateWinner()}`;
    }
    return `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
  }

  render() {

    return (
      <div className="Board">
        <h2>{this.getMessage()}</h2>
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
