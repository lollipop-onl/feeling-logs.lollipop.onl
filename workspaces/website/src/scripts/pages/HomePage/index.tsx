import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ApplicationNavbar } from '../../components/ApplicationNavbar';

type Props = RouteComponentProps<{}>;

export const HomePage: FC<Props> = () => {
  return (
    <div>
      <ApplicationNavbar isNavigationVisible />
      <p>404 not found.</p>
    </div>
  );
};
