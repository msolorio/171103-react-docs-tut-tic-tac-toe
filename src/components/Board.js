import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      squareVals: Array(9).fill(null)
    };

    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    console.log('in handleSquareClick', index);

    const newSquareVals = this.state.squareVals.slice();
    newSquareVals[index] = 'X';
    this.setState({squareVals: newSquareVals});
  }

  renderSquare(val, index) {

    return (
      <Square value={val}
        onSquareClick={this.handleSquareClick}
        index={index}
        key={index} />
    );
  };

  render() {
    return (
      <div className="Board">
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
