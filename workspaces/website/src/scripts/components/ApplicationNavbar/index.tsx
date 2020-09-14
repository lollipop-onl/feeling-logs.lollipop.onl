import React, { FC, useMemo } from 'react';
import { useLocation, Link } from '@reach/router';
import cn from 'classnames';
import { ServiceLogo } from '../ServiceLogo';
import { ComponentProps } from '../../types/component';
import styles from './index.module.scss';

type Props = ComponentProps<{
  isNavigationVisible?: boolean;
}>;

export const ApplicationNavbar: FC<Props> = ({
  className,
  isNavigationVisible = false,
}) => {
  return (
    <header className={cn(className, styles.applicationNavbar)}>
      <ServiceLogo className={styles.logo} color="#fff" />
      {isNavigationVisible ? (
        <nav className={styles.navigation}>
          <Link className={styles.link} to="/home">
            Back to Home
          </Link>
        </nav>
      ) : null}
    </header>
  );
};
