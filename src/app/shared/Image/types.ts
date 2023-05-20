import { PropsWithChildren } from 'react';
import { SxProps, Theme } from '@mui/material';

export interface ImageProps extends PropsWithChildren {
  src: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  alt?: string;
  sx?: SxProps<Theme>;
}
