import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ApplicationNavbar } from '../../components/ApplicationNavbar';

type Props = RouteComponentProps<{}>;

export const NotFoundPage: FC<Props> = () => {
  return <div>

    <ApplicationNavbar isNavigationVisible={false} />404 not found.</div>;
};
