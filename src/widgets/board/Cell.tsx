import { ReactNode } from 'react';

import { useStore } from 'effector-react';

import { Box, createStyles } from '@mantine/core';

import { setCell } from 'entities/board';
import { popRackTail, $selectedRackTail, setSelectedTail } from 'entities/rack';

import { log } from 'shared/lib';

export const Cell = ({ children, indexCell, indexRow, isEmpty }: CellProps) => {
  const { classes, cx } = useStyles();
  const tail = useStore($selectedRackTail);

  const className = cx(classes.cell, {
    [classes.cellWordX3]: isWordX3(indexRow, indexCell),
    [classes.cellWordX2]: isWordX2(indexRow, indexCell),
    [classes.cellLetterX3]: isLetterX3(indexRow, indexCell),
    [classes.cellLetterX2]: isLetterX2(indexRow, indexCell),
    [classes.cellCenter]: indexRow === 7 && indexCell === 7,
  });

  const handleClick = () => {
    log('[row]', indexRow);
    log('[cell]', indexCell);
    if (isEmpty && tail?.letter) {
      setCell({ indexRow, indexCell, letter: tail.letter });
      setSelectedTail(null);
      popRackTail(tail.index);
    }
  };

  // TODO надо добавить возможность заменить поставленную букву если ход еще не подтвердился

  return (
    <Box
      onClick={handleClick}
      className={isEmpty ? className : cx(classes.cell, classes.inactiveCell)}
      data-cell={`${indexRow}-${indexCell}`}
      data-cell-word-x3={isWordX3(indexRow, indexCell)}
      data-cell-word-x2={isWordX2(indexRow, indexCell)}
      data-cell-letter-x3={isLetterX3(indexRow, indexCell)}
      data-cell-letter-x2={isLetterX2(indexRow, indexCell)}
      data-cell-center={indexRow === 7 && indexCell === 7}>
      {isEmpty ? (
        isWordX3(indexRow, indexCell) ? (
          <>Word x3</>
        ) : isWordX2(indexRow, indexCell) ? (
          <>Word x2</>
        ) : isLetterX3(indexRow, indexCell) ? (
          <>Letter x3</>
        ) : isLetterX2(indexRow, indexCell) ? (
          <>Letter x2</>
        ) : (
          children
        )
      ) : (
        children
      )}
    </Box>
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

const useStyles = createStyles((theme) => ({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    backgroundColor: theme.colors.indian[3],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.indian[2],
    },
  },

  cellCenter: {
    backgroundColor: theme.colors.dark[5],

    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },

  cellWordX3: {
    backgroundColor: theme.colors.red[4],

    '&:hover': {
      backgroundColor: theme.colors.red[3],
    },
  },

  cellWordX2: {
    backgroundColor: theme.colors.blue[4],

    '&:hover': {
      backgroundColor: theme.colors.blue[3],
    },
  },

  cellLetterX3: {
    backgroundColor: theme.colors.yellow[4],

    '&:hover': {
      backgroundColor: theme.colors.yellow[3],
    },
  },

  cellLetterX2: {
    backgroundColor: theme.colors.green[4],

    '&:hover': {
      backgroundColor: theme.colors.green[3],
    },
  },

  inactiveCell: {
    fontWeight: 600,
    color: theme.white,
    fontSize: theme.fontSizes.xl,
    backgroundColor: theme.colors.dark[7],
    cursor: 'default',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: theme.colors.dark[7],
    },
  },
}));

interface CellProps {
  children: ReactNode;
  indexCell: number;
  indexRow: number;
  isEmpty: boolean;
}
