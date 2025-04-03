import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';
import AppAppBar from './AppAppBar';
import Hero from './Hero';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
         <ThemeProvider theme={theme}>
   <CssBaseline />
      <App />
      <AppAppBar />
      <Hero />
    </ThemeProvider >
     
  
  </React.StrictMode>,
);
