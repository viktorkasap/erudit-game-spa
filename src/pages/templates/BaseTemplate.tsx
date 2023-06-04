import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container, rem } from '@mantine/core';

import { ToggleSchema } from 'widgets/toggle-schema/ToggleSchema';

import { ErrorBoundary, ProgressBarInit } from 'shared/lib';

export const BaseTemplate = () => {
  return (
    <Container size="xl" miw="78.75rem" mih="100%" h="100%" sx={{ display: 'flex', flexDirection: 'column' }}>
      <header></header>
      <main style={{ flex: 1, paddingTop: rem(32) }}>
        <Suspense fallback={<ProgressBarInit />}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </main>
      <footer></footer>
      <ToggleSchema />
    </Container>
  );
};
