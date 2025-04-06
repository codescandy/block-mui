import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "@fontsource/public-sans"; // Defaults to weight 400 with normal style

// A custom theme for this app
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
      main: "#8b3dff", // Blue (Default MUI primary)
      light: "#e8d8ff", // Light blue
      dark: "#6f31cc", // Dark blue
    },
    secondary: {
      main: "#9C27B0", // Purple
      light: "#BA68C8",
      dark: "#7B1FA2",
    },
    success: {
      main: "#4CAF50", // Green
      light: "#81C784",
      dark: "#388E3C",
    },
    warning: {
      main: "#FF9800", // Orange
      light: "#FFB74D",
      dark: "#F57C00",
    },
    error: {
      main: "#D32F2F", // Red
      light: "#E57373",
      dark: "#C62828",
    },
    info: {
      main: "#0dcaf0", // Cyan
      light: "#4FC3F7",
      dark: "#01579B",
    },
    
    
  },
  typography: {
    fontFamily: "'public-sans', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Removes uppercase text
          borderRadius: "8px", // Rounded corners
          fontSize: "16px",
          fontWeight: "600",
          padding: "8px 16px",
          boxShadow: "none", // Removes default shadow
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
          padding: "6px 12px", // Custom padding
          borderRadius: "999px", // Fully rounded badge
          fontSize: "12px", // Custom font size
          height: "24px", // Prevent default stretching
         
          fontWeight: "bold",
          minWidth: "auto", // Prevent default stretching
        },
      },
    },
  },
 
});

export default theme;

