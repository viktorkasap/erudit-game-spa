import { BrowserRouter } from 'react-router-dom';

import { Routing } from 'pages/routing';

import { WithTheme } from './providers';

export const App = () => {
  return (
    <WithTheme>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </WithTheme>
  );
};
