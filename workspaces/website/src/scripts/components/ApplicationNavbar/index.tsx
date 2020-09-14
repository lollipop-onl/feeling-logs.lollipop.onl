import React, { FC } from 'react';
import { Link } from '@reach/router';
import cn from 'classnames';
import { ServiceLogo } from '../ServiceLogo';
import { ComponentProps } from '../../../types/component';
import styles from './index.module.scss';

type Props = ComponentProps<{}>;

export const ApplicationNavbar: FC<Props> = ({ className }) => {
  return (
    <header className={cn(className, styles.applicationNavbar)}>
      <ServiceLogo className={styles.logo} color="#fff" />
      <nav className={styles.navigation}>
        <Link className={styles.link} to="/home">Back to Home</Link>
      </nav>
    </header>
  )
};
