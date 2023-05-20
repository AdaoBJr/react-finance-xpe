import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { Image } from '../Image';
import { Title } from '../Title';

import { header } from 'articles';
import { BoxContainer } from './styles';
import logo from 'assets/icons/logo.svg';

export const Header: React.FC = () => (
  <Box sx={BoxContainer}>
    <Tooltip placement="top" title={header.tooltip}>
      <Box role="button" onClick={() => window.history.back()} sx={{ cursor: 'pointer' }}>
        <Image
          src={logo}
          alt="logo-header"
          sx={{ width: '50px', marginLeft: { xs: 1, sm: 0 } }}
        />
      </Box>
    </Tooltip>

    <Title variant="h1" color="text.primary" alignSelf={'center'}>
      {header.title}
    </Title>
  </Box>
);
