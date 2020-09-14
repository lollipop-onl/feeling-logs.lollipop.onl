import React, { FC, useEffect } from 'react';
import { Router } from './Router';
import { ApplicationLayout } from './components/ApplicationLayout';
import { ApplicationNavbar } from './components/ApplicationNavbar';

export const Application: FC = () => {
  useEffect(() => {
    const onResize = () => {
      const vh = window.innerHeight * 0.01;
      const { documentElement } = document;

      if (documentElement instanceof HTMLElement) {
        documentElement.style.setProperty('--vh', `${vh}px`);
      }
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return <ApplicationLayout><ApplicationNavbar /><Router /></ApplicationLayout>;
};
