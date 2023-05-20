import { CSSProperties } from 'react';

export interface AnimationProps {
  animation: unknown;
  alt?: string;
  width?: number | string;
  height?: number | string;
  center?: boolean;
  style?: CSSProperties;
}

export interface UseAnimationProps extends AnimationProps {}
