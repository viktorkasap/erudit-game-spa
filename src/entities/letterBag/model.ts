import { createApi, createStore } from 'effector';

type InitialLettersProps = Record<string, { count: number; value: number }>;

export const lettersInfo: InitialLettersProps = {
  а: { count: 10, value: 1 },
  б: { count: 3, value: 3 },
  в: { count: 5, value: 2 },
  г: { count: 3, value: 3 },
  д: { count: 5, value: 2 },
  е: { count: 9, value: 1 },
  ж: { count: 2, value: 5 },
  з: { count: 2, value: 5 },
  и: { count: 8, value: 1 },
  й: { count: 4, value: 2 },
  к: { count: 6, value: 2 },
  л: { count: 4, value: 2 },
  м: { count: 5, value: 2 },
  н: { count: 8, value: 1 },
  о: { count: 10, value: 1 },
  п: { count: 6, value: 2 },
  р: { count: 6, value: 2 },
  с: { count: 6, value: 2 },
  т: { count: 5, value: 2 },
  у: { count: 3, value: 3 },
  ф: { count: 1, value: 10 },
  х: { count: 2, value: 5 },
  ц: { count: 1, value: 10 },
  ч: { count: 2, value: 5 },
  ш: { count: 1, value: 10 },
  щ: { count: 1, value: 10 },
  ъ: { count: 1, value: 10 },
  ы: { count: 2, value: 5 },
  ь: { count: 2, value: 5 },
  э: { count: 1, value: 10 },
  ю: { count: 1, value: 10 },
  я: { count: 3, value: 3 },
  '*': { count: 3, value: 0 },
};

const bag: string[] = [];

Object.entries(lettersInfo).forEach(([letter, value]) => {
  for (let i = 0; i < value.count; i++) {
    bag.push(letter);
  }
});

export const $letterBag = createStore(bag);

export const { removeLetter } = createApi($letterBag, {
  removeLetter: (state, payload) => {
    const letterIndex = state.indexOf(payload);

    if (letterIndex > -1) {
      state.splice(letterIndex, 1);
    }

    return state;
  },
});
