import React from 'react';
import Square from "./Square";

function BoardRow({row, squares, onClick}) {
  return (
    <div className="board-row">
      {[...Array(3)].map((_, col) => {
        const squareNum = row * 3 + col;
        return (
          <Square
            value={squares[squareNum]}
            onClick={onClick.bind(null, squareNum)}
          />
        );
      })}
    </div>
  )
}

export function Board({squares, onClick}) {
  return (
    <div>
      {[...Array(3)].map((_, row) => <BoardRow row={row} squares={squares} onClick={onClick}/>)}
    </div>
  );
}
