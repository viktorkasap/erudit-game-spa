import { useEffect, useState } from 'react';

import { useStore } from 'effector-react';

import { $board, Board as BoardComponent, setCell } from 'entities/board';
import { addWordToHistory } from 'entities/history';
import { removeLetter } from 'entities/letterBag';
import { $turn, setNextPlayer } from 'entities/turn';

import { log } from 'shared/lib';

import words from '../../../public/dict/ru/russian_nouns.json';

import { Row } from './Row';

// const apiKey = import.meta.env.VITE_YANDEX_DICT_API_KEY;

const buildInitialWord = () => {
  const wordsArray = Object.keys(words);
  const sevenLettersWords = wordsArray.filter((word) => word.length === 7);

  return sevenLettersWords[Math.floor(Math.random() * sevenLettersWords.length)];
};

const useStartGame = () => {
  const indexRow = 7;
  let indexCell = 4;

  return (firstWord: string) => {
    const firstWordArray = firstWord.split('');

    log('firstWordArray', firstWordArray);

    firstWordArray.forEach((letter) => {
      removeLetter(letter);
      setCell({ indexRow, indexCell, letter });
      indexCell += 1;
    });

    addWordToHistory({ player: 'computer', word: firstWord });
    setNextPlayer('player1');
  };
};

export const Board = () => {
  const board = useStore($board);
  const player = useStore($turn);

  const [firstWord, setFirstWord] = useState<string | null>(null);
  const startGame = useStartGame();

  useEffect(() => {
    if (!firstWord) {
      setFirstWord(buildInitialWord());
    }

    if (firstWord && player === 'computer') {
      log('[firstWord]', firstWord);
      startGame(firstWord);
    }
  }, [firstWord, player, startGame]);

  return (
    <BoardComponent>
      {board.map((row, indexRow) => {
        return <Row key={`${row}-${indexRow}`} row={row} indexRow={indexRow} isLast={indexRow === board.length - 1} />;
      })}
    </BoardComponent>
  );
};
