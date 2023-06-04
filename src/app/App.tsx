import { Board } from 'widgets/board';

// import styles from './styles.module.css';

import 'shared/config/theme/styles.css';
import { SwitchMode } from 'entities/theme';

import { Button } from 'shared/ui';

export const App = () => {
  return (
    <div className="app">
      <div className="flex align-center justify-center gap-4 mt-24">
        <Button>Filled</Button>
        <Button>Light</Button>
        <Button>Outline</Button>
      </div>
      <SwitchMode />
      <Board />
    </div>
  );
};
