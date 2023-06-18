import { createStore } from 'effector';

import dictionary from 'shared/assets/dict/ru1/words.json';

export interface GaddagNode {
  [key: string]: GaddagNode;
}

const createGADDAG = () => {
  const GADDAG: GaddagNode = {};

  for (const word of Object.keys(dictionary as Record<string, string>)) {
    const reversedWord = word[0] + word.slice(1).split('').reverse().join('');

    let currentNode = GADDAG;

    for (const letter of reversedWord) {
      if (!currentNode[letter]) {
        currentNode[letter] = {};
      }
      currentNode = currentNode[letter];
    }
  }

  return GADDAG;
};

// Создайте GADDAG здесь или импортируйте его, если он создается в другом месте
const GADDAG = createGADDAG();

export const $gaddag = createStore(GADDAG);
