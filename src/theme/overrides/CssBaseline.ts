import { Components } from '@mui/material/styles';

const CssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      margin: 0,
      padding: 0,
      color: '#64748b', // Custom text color
      backgroundColor: '#fff', // Optional: set a background
      fontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
    },
  },
};

export default CssBaseline;
