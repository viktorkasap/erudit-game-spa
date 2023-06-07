import { useStore } from 'effector-react';

import { Box, createStyles, Group } from '@mantine/core';

import { Cell } from 'widgets/board/Cell';

import { $board } from 'entities/board';
import { Rack } from 'entities/rack/Rack';

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
                return (
                  <Cell key={`cell-${indexCell}`} indexCell={indexCell} indexRow={indexRow}>
                    {cell || (
                      <>
                        R-{indexRow} C-{indexCell}
                      </>
                    )}
                  </Cell>
                );
              })}
            </Group>
          );
        })}
      </Box>

      <Rack />
    </>
  );
};

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
}));
