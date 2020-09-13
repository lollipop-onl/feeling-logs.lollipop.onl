import React, { FC } from 'react';
import { Router as ReachRouter } from '@reach/router';

import { LandingPage } from './pages/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Router: FC = () => {
  return (
    <ReachRouter>
      <LandingPage path="/" />
      <NotFoundPage default />
    </ReachRouter>
  );
};
