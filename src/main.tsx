import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Clients from './Clients';
import Features from './Features';
import LeftImageFeatures from './LeftImageFeatures';
import RightImageFeatures from './RightImageFeatures';
import Testimonials from './Testimonials';
import AppButtons from './AppButtons';
import Cta from './Cta';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <AppAppBar />
      <Hero />
      <Clients />
      <Features/>
      <LeftImageFeatures/>
      <RightImageFeatures/>
     
      
      <Testimonials/>
      <AppButtons/> 
      <Cta/>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>
);
