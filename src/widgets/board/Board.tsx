import { useStore } from 'effector-react';

import { Box, createStyles, Flex, Group } from '@mantine/core';

import { $board } from './model';

// RULES https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D1%80%D1%8D%D0%B1%D0%B1%D0%BB

export const Board = () => {
  const board = useStore($board);
  const { classes, cx } = useStyles();

  return (
    <>
      <Box className={cx(classes.board)}>
        {board.map((row, indexRow) => {
          return (
            <Group
              position="apart"
              spacing="0.25rem"
              key={`${row}-${indexRow}`}
              className={cx(classes.row, { [classes.rowLast]: indexRow === board.length - 1 })}
              data-row={indexRow}>
              {row.map((cell: null | string | number, indexCell: number) => {
                const className = cx(classes.cell, {
                  [classes.cellWordX3]: isWordX3(indexRow, indexCell),
                  [classes.cellWordX2]: isWordX2(indexRow, indexCell),
                  [classes.cellLetterX3]: isLetterX3(indexRow, indexCell),
                  [classes.cellLetterX2]: isLetterX2(indexRow, indexCell),
                  [classes.cellCenter]: indexRow === 7 && indexCell === 7,
                });

                return (
                  <Box
                    key={`${cell}-${indexCell}`}
                    className={cx(className)}
                    data-cell={`${indexRow}-${indexCell}`}
                    data-cell-word-x3={isWordX3(indexRow, indexCell)}
                    data-cell-word-x2={isWordX2(indexRow, indexCell)}
                    data-cell-letter-x3={isLetterX3(indexRow, indexCell)}
                    data-cell-letter-x2={isLetterX2(indexRow, indexCell)}
                    data-cell-center={indexRow === 7 && indexCell === 7}>
                    R-{indexRow} C-{indexCell}
                  </Box>
                );
              })}
            </Group>
          );
        })}
      </Box>

      <Flex className={classes.rack} justify="center" align="center" mt="lg" p="md" gap="0.125rem">
        <div className={classes.rackLetter}>a</div>
        <div className={classes.rackLetter}>b</div>
        <div className={classes.rackLetter}>c</div>
        <div className={classes.rackLetter}>d</div>
        <div className={classes.rackLetter}>e</div>
        <div className={classes.rackLetter}>f</div>
        <div className={classes.rackLetter}>g</div>
      </Flex>
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

const useStyles = createStyles((theme) => ({
  board: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.dark[9],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.dark[9],
  },

  row: {
    marginBottom: '0.25rem',
  },
  rowLast: {
    marginBottom: 0,
  },

  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colors.indian[3],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
  },

  cellCenter: {
    backgroundColor: theme.colors.dark[5],
  },

  cellWordX3: {
    backgroundColor: theme.colors.red[4],
  },

  cellWordX2: {
    backgroundColor: theme.colors.blue[4],
  },

  cellLetterX3: {
    backgroundColor: theme.colors.yellow[4],
  },

  cellLetterX2: {
    backgroundColor: theme.colors.green[4],
  },

  rack: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.indian[4],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.indian[2],
  },

  rackLetter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    fontSize: theme.fontSizes.xl,
    textTransform: 'uppercase',
    fontWeight: 600,
    backgroundColor: theme.colors.dark[7],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
    color: theme.white,
  },
}));
