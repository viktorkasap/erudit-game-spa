import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/content';
import { BaseTemplate } from 'pages/templates';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<BaseTemplate />}>
          <Route path={'/'} element={<Home />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </>
  );
};
