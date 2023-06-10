import { useStore } from 'effector-react';

import { Board } from 'widgets/board';
import { Rack } from 'widgets/rack';

import { $turn } from 'entities/turn';

const Home = () => {
  const turnPlayer = useStore($turn);

  return (
    <>
      <Board />
      {turnPlayer === 'player1' && <Rack />}
    </>
  );
};

export default Home;
