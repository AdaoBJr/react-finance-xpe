import { useMemo } from 'react';
import { AnimationProps, TitleProps } from 'types/shared';

import { error } from 'articles';
import error_system from 'assets/animations/error-system.json';

export const useError = () => {
  const errorProps = useMemo(
    () => ({
      animationProps: {
        animation: error_system,
        alt: 'animação-erro',
        center: true,
        width: '300px',
      } as AnimationProps,
      subTitleProps: {
        children: error.title,
        variant: 'h2',
        textAlign: 'center',
      } as TitleProps,
      textProps: {
        children: error.subTitle,
        variant: 'body2',
        fontSize: '1rem',
        textAlign: 'center',
      } as TitleProps,
    }),
    []
  );

  return { errorProps };
};
