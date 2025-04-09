import { createTheme } from '@mui/material/styles';
import "@fontsource/public-sans"; // Defaults to weight 400 with normal style

const theme = createTheme({
  cssVariables: true,
  palette: {
    grey: { 
100: "#f1f5f9",
200: "#e2e8f0",
300: "#cbd5e1",
400: "#94a3b8",
500: "#64748b",
600: "#475569",
700: "#334155",
800: "#1e293b",
900: "#0f172a",

    },
    primary: {
      main: "#8b3dff",
      light: "#e8d8ff",
      dark: "#532599",
    },
    secondary: {
      main: "#e2e8f0",
      light: "#f9fafc",
      dark: "#2d2e30",
    },
    success: {
      main: "#008008",
      light: "#cce6ce",
      dark: "#001a02",
    },
    warning: {
      main: "#ffc107",
      light: "#fff3cd",
      dark: "#332701",
    },
    error: {
      main: "#db1436",
      light: "#f8d0d7",
      dark: "#2c040b",
    },
    info: {
      main: "#0dcaf0",
      light: "#cff4fc",
      dark: "#032830",
    },
  },
  typography: {
    fontFamily: [
      'Public Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
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
