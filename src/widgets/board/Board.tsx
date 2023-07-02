import { useStore } from 'effector-react';

import { $board, Board as BoardComponent, setCell, startWord } from 'entities/board';
import { $game, nextPlayer } from 'entities/game';
import { removeLetter } from 'entities/letterBag';

import dictionary from 'shared/assets/dict/ru1/words.json';
import { Player } from 'shared/types';

import { Row } from './Row';

const buildInitialWord = () => {
  const wordsArray = Object.keys(dictionary);
  const sevenLettersWords = wordsArray.filter((word) => word.length === 7);

  return sevenLettersWords[Math.floor(Math.random() * sevenLettersWords.length)];
};

const useStartGame = () => {
  const indexRow = 7;
  let indexCell = 4;

  return () => {
    const firstWord = buildInitialWord();
    const firstWordArray = firstWord.split('');

    firstWordArray.forEach((letter) => {
      removeLetter(letter);
      setCell({ indexRow, indexCell, letter });
      indexCell += 1;
    });

    startWord({ word: firstWord });
    nextPlayer();
  };
};

export const Board = () => {
  const { board } = useStore($board);
  const { turn } = useStore($game);
  const startGame = useStartGame();

  if (turn === Player.Computer) {
    startGame();
  }

  return (
    <BoardComponent>
      {board.map((row, indexRow) => {
        return <Row key={`${row}-${indexRow}`} row={row} indexRow={indexRow} isLast={indexRow === board.length - 1} />;
      })}
    </BoardComponent>
  );
};
