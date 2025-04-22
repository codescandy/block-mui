import { Components } from '@mui/material/styles';

const Button: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      padding: '8px 16px',
      boxShadow: 'none',
    },
    contained: {
      backgroundColor: 'primary.main',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primary.dark',
      },
    },
    outlined: {
      borderColor: 'primary.main',
      color: 'primary.main',
      '&:hover': {
        borderColor: 'primary.main',
        color: 'primary.main',
      },
    },
    text: {
      color: 'primary.main',
      '&:hover': {
        backgroundColor: 'primary.dark',
      },
    },
  },
};

export default Button;
