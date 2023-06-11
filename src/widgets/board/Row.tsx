import { createStyles, Group } from '@mantine/core';

import { Cell } from './Cell';

export const Row = ({ indexRow, row, isLast }: { indexRow: number; row: (null | string | number)[]; isLast: boolean }) => {
  const { classes, cx } = useStyles();

  return (
    <Group position="apart" spacing="0.25rem" data-row={indexRow} className={cx(classes.row, { [classes.rowLast]: isLast })}>
      {row.map((cell: null | string | number, indexCell: number) => {
        return (
          <Cell key={`cell-${indexCell}`} indexCell={indexCell} indexRow={indexRow} isEmpty={cell === null}>
            {cell}
          </Cell>
        );
      })}
    </Group>
  );
};

const useStyles = createStyles(() => ({
  row: {
    marginBottom: '0.25rem',
  },
  rowLast: {
    marginBottom: 0,
  },
}));
