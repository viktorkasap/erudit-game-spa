import { useStore } from 'effector-react';

import { createStyles } from '@mantine/core';

import { $board } from './model';

// RULES https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D1%80%D1%8D%D0%B1%D0%B1%D0%BB

export const Board = () => {
  const board = useStore($board);
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={cx(classes.board)}>
        {board.map((row, indexRow) => {
          return (
            <div key={`${row}-${indexRow}`} className={cx(classes.row)} data-row={indexRow}>
              {row.map((cell: null | string | number, indexCell: number) => {
                const className = cx(classes.cell, {
                  [classes.cellWordX3]: isWordX3(indexRow, indexCell),
                  [classes.cellWordX2]: isWordX2(indexRow, indexCell),
                  [classes.cellLetterX3]: isLetterX3(indexRow, indexCell),
                  [classes.cellLetterX2]: isLetterX2(indexRow, indexCell),
                  [classes.cellCenter]: indexRow === 7 && indexCell === 7,
                });

                return (
                  <div key={`${cell}-${indexCell}`} className={className} data-cell={`${indexRow}-${indexCell}`}>
                    R-{indexRow} C-{indexCell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={classes.lettersBox}>
        <div className={classes.lettersBoxLetter}>a</div>
        <div className={classes.lettersBoxLetter}>b</div>
        <div className={classes.lettersBoxLetter}>c</div>
        <div className={classes.lettersBoxLetter}>d</div>
        <div className={classes.lettersBoxLetter}>e</div>
        <div className={classes.lettersBoxLetter}>f</div>
        <div className={classes.lettersBoxLetter}>g</div>
      </div>
    </>
  );
};

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

const useStyles = createStyles(() => ({
  board: {},

  row: {},

  cell: {},

  cellCenter: {},

  cellWordX3: {},

  cellWordX2: {},

  cellLetterX3: {},

  cellLetterX2: {},

  lettersBox: {},

  lettersBoxLetter: {},
}));
