import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "@fontsource/inter"; // Defaults to weight 400 with normal style

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: '#8b3dff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

