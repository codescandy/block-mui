import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import cssBaseline from './overrides/CssBaseline';
import Button from './overrides/Button';
import Badge from './overrides/Badge';
import "@fontsource/public-sans"; // Optional font import

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
  components: {
    MuiButton: Button,
    MuiBadge: Badge,
    MuiCssBaseline: cssBaseline,

    // Add other components here
  },
});

export default theme;
