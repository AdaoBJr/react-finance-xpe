import React, { memo } from 'react';
import { CardMedia } from '@mui/material';

import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = memo((props) => {
  return (
    <CardMedia
      component="img"
      image={props.src}
      sx={{
        width: props.width,
        height: props.height,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        ...props.sx,
      }}
      alt={props.alt || 'imagem'}
    />
  );
});
