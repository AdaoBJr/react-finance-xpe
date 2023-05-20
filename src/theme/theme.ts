import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

const { shadows: customShadows } = createTheme();

customShadows[1] = `0px 2px 4px rgba(0, 0, 0, 0.14),
  0px 3px 4px rgba(0, 0, 0, 0.12),
  0px 1px 5px rgba(0, 0, 0, 0.2)`;

customShadows[2] = `0px 6px 10px rgba(0, 0, 0, 0.05),
  0px 1px 18px rgba(0, 0, 0, 0.05),
  0px 3px 5px rgba(0, 0, 0, 0.1)`;

export const theme = createTheme(
  {
    spacing: 16,
    breakpoints: {
      values: {
        xs: 0,
        sm: 641,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#02b9b4',
        light: '#34c7c3',
        dark: '#01817d',
      },
      grey: {
        '50': '#F2F2F2',
        '100': '#E6E6E6',
        '200': '#D6D6D6',
        '300': '#C2C2C2',
        '400': '#ABABAB',
        '500': '#919191',
        '600': '#808080',
        '700': '#6E6E6E',
        '800': '#5E5E5E',
        '900': '#4A4A4A',
        A100: '#383838',
        A200: '#262626',
      },
      text: {
        primary: '#262626',
        secondary: '#4A4A4A',
        disabled: '#6E6E6E',
      },
      common: {
        white: '#FFFFFF',
        black: '#000000',
      },
      background: {
        default: '#E5E5E5',
        paper: '#FFFFFF',
      },
      info: {
        main: '#0E58EC',
        light: '#DFE8FC',
      },
      warning: {
        main: '#795D00',
        light: '#FDF3D3',
      },
      success: {
        main: '#09732E',
        light: '#E2FFCF',
      },
      error: {
        main: '#C61616',
        light: '#FFE4E4',
      },
    },
    typography: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      h1: {
        color: '#4A4A4A',
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      h2: {
        color: '#4A4A4A',
        fontSize: '1rem',
        fontWeight: 600,
      },
      h3: {
        color: '#4A4A4A',
        fontSize: '.875rem',
        fontWeight: 600,
      },
      body1: {
        color: '#4A4A4A',
        fontWeight: 400,
        fontSize: '.875rem',
        letterSpacing: '.25px',
      },
      body2: {
        color: '#4A4A4A',
        fontWeight: 400,
        fontSize: '.875rem',
        letterSpacing: '.25px',
      },
      button: {
        letterSpacing: '.75px',
        textTransform: 'initial',
      },
    },
    shape: {
      borderRadius: 4,
    },
    shadows: [...customShadows],
    components: {
      MuiButton: {
        defaultProps: {
          color: 'primary',
          variant: 'contained',
          size: 'large',
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            padding: '10px 12px !important',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            top: '-5px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '1rem 1.5rem',
            borderRadius: '10px',
          },
        },
      },
    },
  },
  ptBR
);
