import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");

  function handleCLick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleCLick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}
