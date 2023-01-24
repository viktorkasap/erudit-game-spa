// https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D1%80%D1%8D%D0%B1%D0%B1%D0%BB

import { useState } from "react";
import { useStore } from "effector-react";
import cx from "classnames";

import "./App.css";

import { $board } from "./modelBoard";

const isWordX3 = (indexRow: number, indexCell: number) =>
  (indexRow === 0 && indexCell === 0) ||
  (indexRow === 0 && indexCell === 7) ||
  (indexRow === 0 && indexCell === 14) ||
  (indexRow === 7 && indexCell === 0) ||
  (indexRow === 7 && indexCell === 14) ||
  (indexRow === 14 && indexCell === 0) ||
  (indexRow === 14 && indexCell === 7) ||
  (indexRow === 14 && indexCell === 14);

const isWordX2 = (indexRow: number, indexCell: number) =>
  (indexRow === 1 && indexCell === 1) ||
  (indexRow === 1 && indexCell === 13) ||
  (indexRow === 2 && indexCell === 2) ||
  (indexRow === 2 && indexCell === 12) ||
  (indexRow === 3 && indexCell === 3) ||
  (indexRow === 3 && indexCell === 11) ||
  (indexRow === 4 && indexCell === 4) ||
  (indexRow === 4 && indexCell === 10) ||
  (indexRow === 10 && indexCell === 4) ||
  (indexRow === 10 && indexCell === 10) ||
  (indexRow === 11 && indexCell === 3) ||
  (indexRow === 11 && indexCell === 11) ||
  (indexRow === 12 && indexCell === 2) ||
  (indexRow === 12 && indexCell === 12) ||
  (indexRow === 13 && indexCell === 1) ||
  (indexRow === 13 && indexCell === 13);

const isLetterX2 = (indexRow: number, indexCell: number) =>
  (indexRow === 0 && indexCell === 3) ||
  (indexRow === 0 && indexCell === 11) ||
  (indexRow === 2 && indexCell === 6) ||
  (indexRow === 2 && indexCell === 8) ||
  (indexRow === 3 && indexCell === 0) ||
  (indexRow === 3 && indexCell === 7) ||
  (indexRow === 3 && indexCell === 14) ||
  (indexRow === 6 && indexCell === 2) ||
  (indexRow === 6 && indexCell === 6) ||
  (indexRow === 6 && indexCell === 8) ||
  (indexRow === 6 && indexCell === 12) ||
  (indexRow === 7 && indexCell === 3) ||
  (indexRow === 7 && indexCell === 11) ||
  (indexRow === 8 && indexCell === 2) ||
  (indexRow === 8 && indexCell === 6) ||
  (indexRow === 8 && indexCell === 8) ||
  (indexRow === 8 && indexCell === 12) ||
  (indexRow === 11 && indexCell === 0) ||
  (indexRow === 11 && indexCell === 7) ||
  (indexRow === 11 && indexCell === 14) ||
  (indexRow === 12 && indexCell === 6) ||
  (indexRow === 12 && indexCell === 8) ||
  (indexRow === 14 && indexCell === 3) ||
  (indexRow === 14 && indexCell === 11);

const isLetterX3 = (indexRow: number, indexCell: number) =>
  (indexRow === 1 && indexCell === 5) ||
  (indexRow === 1 && indexCell === 9) ||
  (indexRow === 5 && indexCell === 1) ||
  (indexRow === 5 && indexCell === 5) ||
  (indexRow === 5 && indexCell === 9) ||
  (indexRow === 5 && indexCell === 13) ||
  (indexRow === 9 && indexCell === 1) ||
  (indexRow === 9 && indexCell === 9) ||
  (indexRow === 9 && indexCell === 5) ||
  (indexRow === 9 && indexCell === 13) ||
  (indexRow === 13 && indexCell === 5) ||
  (indexRow === 13 && indexCell === 9);

const Board = () => {
  const board = useStore($board);

  console.log("board", board);

  return (
    <>
      <div className="board">
        {board.map((row, indexRow) => {
          return (
            <div
              key={`${row}-${indexRow}`}
              className="row"
              id={`${row}-${indexRow}`}
            >
              {row.map((cell: null | string | number, indexCell: number) => {
                const className = cx("cell", {
                  ["cell-word-x3"]: isWordX3(indexRow, indexCell),
                  ["cell-word-x2"]: isWordX2(indexRow, indexCell),
                  ["cell-letter-x2"]: isLetterX2(indexRow, indexCell),
                  ["cell-letter-x3"]: isLetterX3(indexRow, indexCell),
                  ["cell--center"]: indexRow === 7 && indexCell === 7,
                });
                return (
                  <div
                    key={`${cell}-${indexCell}`}
                    className={className}
                    id={`${cell}-${indexCell}`}
                  >
                    R-{indexRow} C-{indexCell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="letters-box">
        <div className="letters-box-letter">a</div>
        <div className="letters-box-letter">b</div>
        <div className="letters-box-letter">c</div>
        <div className="letters-box-letter">d</div>
        <div className="letters-box-letter">e</div>
        <div className="letters-box-letter">f</div>
        <div className="letters-box-letter">g</div>
      </div>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Board />
    </div>
  );
}

const letters = {
  А: {
    count: 10,
    point: 1,
  },
  Б: {
    count: 3,
    point: 3,
  },
  В: {
    count: 5,
    point: 2,
  },
  Г: {
    count: 3,
    point: 3,
  },
  Д: {
    count: 5,
    point: 2,
  },
  Е: {
    count: 9,
    point: 1,
  },
  Ж: {
    count: 2,
    point: 5,
  },
  З: {
    count: 2,
    point: 5,
  },
  И: {
    count: 8,
    point: 1,
  },
  Й: {
    count: 4,
    point: 2,
  },
  К: {
    count: 6,
    point: 2,
  },
  Л: {
    count: 4,
    point: 2,
  },
  М: {
    count: 5,
    point: 2,
  },
  Н: {
    count: 8,
    point: 1,
  },
  О: {
    count: 10,
    point: 1,
  },
  П: {
    count: 6,
    point: 2,
  },
  Р: {
    count: 6,
    point: 2,
  },
  С: {
    count: 6,
    point: 2,
  },
  Т: {
    count: 5,
    point: 2,
  },
  У: {
    count: 13,
    point: 3,
  },
  Ф: {
    count: 1,
    point: 10,
  },
  Х: {
    count: 2,
    point: 5,
  },
  Ц: {
    count: 1,
    point: 10,
  },
  Ч: {
    count: 2,
    point: 5,
  },
  Ш: {
    count: 1,
    point: 10,
  },
  Щ: {
    count: 1,
    point: 10,
  },
  Ъ: {
    count: 1,
    point: 10,
  },
  Ы: {
    count: 2,
    point: 5,
  },
  Ь: {
    count: 2,
    point: 5,
  },
  Э: {
    count: 1,
    point: 10,
  },
  Ю: {
    count: 1,
    point: 10,
  },
  Я: {
    count: 3,
    point: 3,
  },
};

export default App;
