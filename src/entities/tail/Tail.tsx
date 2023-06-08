import { Box, createStyles } from '@mantine/core';

export const Tail = ({ letter, isSelected, onClick }: TailProps) => {
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.tail, { [classes.tailSelected]: isSelected })} onClick={onClick}>
      {letter}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  tail: {
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
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.dark[6],
    },
  },

  tailSelected: {
    backgroundColor: theme.colors.dark[4],

    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
}));

interface TailProps {
  letter: string;
  onClick: () => void;
  isSelected: boolean;
}
