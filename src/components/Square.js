import React from 'react';

export default function Square(props) {

  return (
    <button className="Square"
      onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
