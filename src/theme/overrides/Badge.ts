


import { Components } from '@mui/material/styles';

const Badge: Components['MuiBadge'] = {
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
};

export default Badge;