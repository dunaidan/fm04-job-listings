import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D4E9EC',
      // blue
      ligh: red[300],
      dark: '#65A29B',
      contrastText: '#65A29B',
      // dark cyan
    },
    secondary: {
      main: red[300],
      dark: red[300],
      contrastText: red[300],
    },
    text: {
      primary: '#65A29B',
      secondary: '#7B8483',
      hint: '#7B8483',
      // gray
    },
    background: {
      default: 'hsl(180, 52%, 96%)', 
      // light blue
    },
  },
  typography: {
    fontFamily: "'League Spartan', 'sans-serif'"
  },
});

export default theme;