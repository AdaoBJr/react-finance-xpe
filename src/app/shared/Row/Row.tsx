import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface RowProps extends BoxProps {}

export const Row: React.FC<RowProps> = ({ children, sx = {}, ...rest }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Box>
);
