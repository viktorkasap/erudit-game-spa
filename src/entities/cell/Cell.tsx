import { PropsWithChildren } from 'react';

import { Box, createStyles } from '@mantine/core';

import { bonus } from 'shared/lib/game';

export const Cell = ({ children, indexCell, indexRow, isEmpty, onClick, isSelected, isEditable }: CellProps) => {
  const { classes, cx } = useStyles();

  const isWordX3 = bonus.wordX3.includes(`${indexRow}-${indexCell}`);
  const isWordX2 = bonus.wordX2.includes(`${indexRow}-${indexCell}`);
  const isLetterX3 = bonus.letterX3.includes(`${indexRow}-${indexCell}`);
  const isLetterX2 = bonus.letterX2.includes(`${indexRow}-${indexCell}`);

  const className = cx(classes.cell, {
    [classes.cellWordX3]: isWordX3,
    [classes.cellWordX2]: isWordX2,
    [classes.cellLetterX3]: isLetterX3,
    [classes.cellLetterX2]: isLetterX2,
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
      data-cell-word-x3={isWordX3}
      data-cell-word-x2={isWordX2}
      data-cell-letter-x3={isLetterX3}
      data-cell-letter-x2={isLetterX2}
      data-cell-center={indexRow === 7 && indexCell === 7}>
      {isEmpty ? <PlaceHolder isWordX3={isWordX3} isWordX2={isWordX2} isLetterX3={isLetterX3} isLetterX2={isLetterX2} /> : children}
    </Box>
  );
};

const PlaceHolder = ({
  isWordX3,
  isWordX2,
  isLetterX3,
  isLetterX2,
}: {
  isWordX3: boolean;
  isWordX2: boolean;
  isLetterX3: boolean;
  isLetterX2: boolean;
}) => {
  switch (true) {
    case isWordX3:
      return <>Word x3</>;
    case isWordX2:
      return <>Word x2</>;

    case isLetterX3:
      return <>Letter x3</>;

    case isLetterX2:
      return <>Letter x2</>;

    default:
      return null;
  }
};

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
