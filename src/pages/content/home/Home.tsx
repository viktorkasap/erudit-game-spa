import { Box, createStyles } from '@mantine/core';

import { Aside } from 'widgets/aside';
import { Board } from 'widgets/board';
import { Rack } from 'widgets/rack';

const Home = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.aside}>
        <Aside />
      </Box>

      <Box className={classes.board}>
        <Board />
      </Box>

      <Box className={classes.rack}>
        <Rack />
      </Box>
    </Box>
  );
};

const useStyles = createStyles(() => {
  return {
    wrapper: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 9.375rem) minmax(0, 51.25rem)',
      gridTemplateAreas: `
        "aside board"
        "aside rack"
      `,
      justifyContent: 'center',
    },

    aside: {
      gridArea: 'aside',
    },

    rack: {
      gridArea: 'rack',
    },

    board: {
      gridArea: 'board',
    },
  };
});

export default Home;
