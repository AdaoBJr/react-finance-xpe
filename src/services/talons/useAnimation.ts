import { useMemo } from 'react';
import { useMediaQuery, Theme } from '@mui/material';

import { UseAnimationProps } from 'types/shared';

export const useAnimation = (props: UseAnimationProps) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: props.animation,
    }),
    [props.animation]
  );

  const animationProps = useMemo(
    () => ({
      ...options,
      style: {
        ...props?.style,
        width: smDown ? 'inherit' : props?.width || props?.height || 460,
        height: smDown ? 'inherit' : props?.height || props?.width || 460,
        margin: props?.center ? 'auto' : 'inherint',
      },
    }),
    [options, props?.width, props?.height, props?.style, smDown]
  );

  return { animationProps };
};
