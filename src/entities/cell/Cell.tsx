import { PropsWithChildren } from 'react';

import { Box, createStyles } from '@mantine/core';

export const Cell = ({ children, indexCell, indexRow, isEmpty, onClick, isSelected, isEditable }: CellProps) => {
  const { classes, cx } = useStyles();

  const className = cx(classes.cell, {
    [classes.cellWordX3]: isWordX3(indexRow, indexCell),
    [classes.cellWordX2]: isWordX2(indexRow, indexCell),
    [classes.cellLetterX3]: isLetterX3(indexRow, indexCell),
    [classes.cellLetterX2]: isLetterX2(indexRow, indexCell),
    [classes.cellCenter]: indexRow === 7 && indexCell === 7,
    [classes.cellSelected]: isSelected,
    [classes.isEditable]: isEditable,
  });

  // todo переделать вместо классов на дата атрибуты: [data-cell-word-x3]="true"

  return (
    <Box
      onClick={onClick}
      className={isEmpty || isEditable ? className : cx(classes.cell, classes.occupiedCell)}
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

const useStyles = createStyles(({ colors, fontSizes, colorScheme, white }) => ({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    color: colorScheme === 'dark' ? colors.dark[5] : colors.dark[5],
    fontSize: fontSizes.sm,
    fontWeight: 600,
    backgroundColor: colors.indian[3],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.indian[2],
    },
  },

  cellCenter: {
    backgroundColor: colors.dark[5],

    '&:hover': {
      backgroundColor: colors.dark[4],
    },
  },

  cellWordX3: {
    backgroundColor: colors.red[4],

    '&:hover': {
      backgroundColor: colors.red[3],
    },
  },

  cellWordX2: {
    backgroundColor: colors.blue[4],

    '&:hover': {
      backgroundColor: colors.blue[3],
    },
  },

  cellLetterX3: {
    backgroundColor: colors.yellow[4],

    '&:hover': {
      backgroundColor: colors.yellow[3],
    },
  },

  cellLetterX2: {
    backgroundColor: colors.green[4],

    '&:hover': {
      backgroundColor: colors.green[3],
    },
  },

  cellSelected: {
    boxShadow: 'inset 0 0 0px 3px rgba(255,255,255,0.5)',
  },

  isEditable: {
    color: white,
    fontWeight: 600,
    fontSize: fontSizes.xl,
    backgroundColor: colors.dark[7],
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: colors.dark[6],
    },
  },

  occupiedCell: {
    color: white,
    fontWeight: 600,
    fontSize: fontSizes.xl,
    backgroundColor: colors.dark[4],
    textTransform: 'uppercase',
    cursor: 'default',

    '&:hover': {
      backgroundColor: colors.dark[4],
    },
  },
}));

interface CellProps extends PropsWithChildren {
  indexCell: number;
  indexRow: number;
  isEmpty: boolean;
  isSelected: boolean;
  onClick: () => void;
  isEditable: boolean;
}
