import React, { FC } from 'react';
import { Router as ReachRouter } from '@reach/router';
import * as C from './const';

import { LandingPage } from './pages/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Router: FC = () => {
  return (
    <ReachRouter>
      <LandingPage path={C.PAGES.LANDING_PAGE} />
      <NotFoundPage default />
    </ReachRouter>
  );
};
