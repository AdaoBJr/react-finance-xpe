import { SxProps, Theme } from '@mui/material';

export const GridContainer: SxProps<Theme> = {
  display: 'grid',
  justifyContent: { xs: 'stretch', md: 'center' },
  alignItems: 'center',
  gap: 1.5,
  p: 1.5,
};

export const PaperWrapper: SxProps<Theme> = {
  p: '1rem 1.5rem',
  width: { xs: '100%', md: '1000px' },
  height: '100%',
};
