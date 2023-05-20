import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from 'theme';
import { App } from './App.tsx';
import { BoxContainer } from './main.styles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={BoxContainer}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
