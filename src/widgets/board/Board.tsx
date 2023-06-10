import { useEffect, useState } from 'react';

import { useStore } from 'effector-react';

import { $board, Board as BoardComponent, setCell } from 'entities/board';
import { removeLetter } from 'entities/letterBag';
import { setTurnPlayer } from 'entities/turn';

import { log } from 'shared/lib';

import words from '../../../public/dict/ru/russian_nouns.json';

import { Row } from './Row';

// const apiKey = import.meta.env.VITE_YANDEX_DICT_API_KEY;

const buildInitialWord = () => {
  const wordsArray = Object.keys(words);
  const sevenLettersWords = wordsArray.filter((word) => word.length === 7);

  const randomWord = sevenLettersWords[Math.floor(Math.random() * sevenLettersWords.length)];

  log('[randomWord]', randomWord);

  return randomWord;
};

export const Board = () => {
  const board = useStore($board);
  const [firstWord, setFirstWord] = useState<string | null>(null);

  useEffect(() => {
    if (!firstWord) {
      setFirstWord(buildInitialWord());
    }

    if (firstWord) {
      const firstWordArray = firstWord.split('');
      log('firstWordArray', firstWordArray);

      const indexRow = 7;
      let indexCell = 4;

      firstWordArray.forEach((letter) => {
        removeLetter(letter);
        setCell({ indexRow, indexCell, letter });
        indexCell += 1;
      });

      setTurnPlayer('player1');
    }
  }, [firstWord]);

  return (
    <BoardComponent>
      {board.map((row, indexRow) => {
        return <Row key={`${row}-${indexRow}`} row={row} indexRow={indexRow} isLast={indexRow === board.length - 1} />;
      })}
    </BoardComponent>
  );
};
