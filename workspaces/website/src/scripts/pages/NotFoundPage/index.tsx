import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

type Props = RouteComponentProps<{}>;

export const NotFoundPage: FC<Props> = () => {
  return <div>404 not found.</div>;
};
