import { createTheme } from '@mui/material/styles';
import "@fontsource/public-sans"; // Defaults to weight 400 with normal style

const theme = createTheme({
  cssVariables: true,
  palette: {
    grey: {
      50: "#f9f9f9",
      100: "#f0f0f0",
      200: "#e0e0e0",
      300: "#c0c0c0",
      400: "#a0a0a0",
      500: "#808080",
      600: "#707070",
      700: "#505050",
      800: "#404040",
      900: "#202020",
    },
    primary: {
      main: "#8b3dff",
      light: "#e8d8ff",
      dark: "#6f31cc",
    },
    secondary: {
      main: "#9C27B0",
      light: "#BA68C8",
      dark: "#7B1FA2",
    },
    success: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
    },
    warning: {
      main: "#FF9800",
      light: "#FFB74D",
      dark: "#F57C00",
    },
    error: {
      main: "#D32F2F",
      light: "#E57373",
      dark: "#C62828",
    },
    info: {
      main: "#0dcaf0",
      light: "#4FC3F7",
      dark: "#01579B",
    },
  },
  typography: {
    fontFamily: [
   
       'Public Sans',
      'sans-serif',
    
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1e293b',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#1e293b',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1e293b',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#1e293b',
    },
    h6: {
      fontSize: '.875rem',
      fontWeight: 500,
      color: '#1e293b',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#64748b',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          padding: "8px 16px",
          boxShadow: "none",
        },
        contained: {
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        },
        outlined: {
          borderColor: "primary.main",
          color: "primary.main",
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
          },
        },
        text: {
          color: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          height: "24px",
          fontWeight: "bold",
          minWidth: "auto",
        },
      },
    },
  
  },
});

export default theme;
