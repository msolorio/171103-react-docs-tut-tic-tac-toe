import React from 'react';

export default function Square(props) {

  function handleSquareClick() {
    props.onSquareClick(props.index);
  }

  return (
    <button className="Square"
      onClick={handleSquareClick}>
      {props.value}
    </button>
  );
}
