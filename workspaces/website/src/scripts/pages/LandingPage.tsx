import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ServiceLogo } from '../components/ServiceLogo';

type Props = RouteComponentProps<{}>;

export const LandingPage: FC<Props> = () => {
  return (
    <div>
      <ServiceLogo />
    </div>
  );
};
