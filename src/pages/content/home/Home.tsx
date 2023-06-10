import { Box } from '@mantine/core';

import { Board } from 'widgets/board';
import { Rack } from 'widgets/rack';

const Home = () => {
  return (
    <Box>
      <Board />
      <Rack />
    </Box>
  );
};

export default Home;
