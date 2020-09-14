import React, { FC } from 'react';
import cn from 'classnames';
import { ComponentProps } from '../../types/component';
import styles from './index.module.scss';

type Props = ComponentProps<{}>;

export const ApplicationLayout: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(className, styles.applicationLayout)}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
