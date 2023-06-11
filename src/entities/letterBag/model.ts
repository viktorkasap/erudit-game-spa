import { createApi, createStore } from 'effector';

type InitialLettersProps = Record<string, { count: number; point: number }>;

export const lettersInfo: InitialLettersProps = {
  а: { count: 10, point: 1 },
  б: { count: 3, point: 3 },
  в: { count: 5, point: 2 },
  г: { count: 3, point: 3 },
  д: { count: 5, point: 2 },
  е: { count: 9, point: 1 },
  ж: { count: 2, point: 5 },
  з: { count: 2, point: 5 },
  и: { count: 8, point: 1 },
  й: { count: 4, point: 2 },
  к: { count: 6, point: 2 },
  л: { count: 4, point: 2 },
  м: { count: 5, point: 2 },
  н: { count: 8, point: 1 },
  о: { count: 10, point: 1 },
  п: { count: 6, point: 2 },
  р: { count: 6, point: 2 },
  с: { count: 6, point: 2 },
  т: { count: 5, point: 2 },
  у: { count: 3, point: 3 },
  ф: { count: 1, point: 10 },
  х: { count: 2, point: 5 },
  ц: { count: 1, point: 10 },
  ч: { count: 2, point: 5 },
  ш: { count: 1, point: 10 },
  щ: { count: 1, point: 10 },
  ъ: { count: 1, point: 10 },
  ы: { count: 2, point: 5 },
  ь: { count: 2, point: 5 },
  э: { count: 1, point: 10 },
  ю: { count: 1, point: 10 },
  я: { count: 3, point: 3 },
  '*': { count: 3, point: 0 },
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
