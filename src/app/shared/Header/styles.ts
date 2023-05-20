import { SxProps, Theme } from '@mui/material';

export const BoxContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 1,
  px: { xs: 1, md: 1.5 },
  backgroundColor: 'background.paper',
  height: { xs: '56px', sm: '76px' },
  width: '100%',
  boxShadow: 2,
};
