import { useEffect } from 'react';

import { nprogress } from '@mantine/nprogress';

export const ProgressBarInit = () => {
  useEffect(() => {
    nprogress.set(15);
    nprogress.start();

    return () => nprogress.complete();
  }, []);

  return <></>;
};
