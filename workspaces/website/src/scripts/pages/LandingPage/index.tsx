import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ApplicationNavbar } from '../../components/ApplicationNavbar';

type Props = RouteComponentProps<{}>;

export const LandingPage: FC<Props> = () => {
  return (
    <div>
      <ApplicationNavbar isNavigationVisible={false} />
    </div>
  );
};
