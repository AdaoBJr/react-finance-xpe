import React, { memo } from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material';

import { AnimationProps } from 'types/shared';
import { useAnimation } from 'services/talons';

export const Animation: React.FC<AnimationProps> = memo((props) => {
  const { animationProps } = useAnimation(props);

  return (
    <Box aria-label={props.alt}>
      <Lottie {...animationProps} />
    </Box>
  );
});
