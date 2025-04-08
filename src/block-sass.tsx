import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import App from './components/App';

import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import LeftImageFeatures from './components/LeftImageFeatures';
import RightImageFeatures from './components/RightImageFeatures';
import Testimonials from './components/Testimonials';
import AppButtons from './components/AppButtons';
import Cta from './components/Cta';
import Footer from './components/Footer';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
      
//       <Hero />
//       <Clients />
//       <Features/>
//       <LeftImageFeatures/>
//       <RightImageFeatures/>         
//       <Testimonials/>
//       <AppButtons/> 
//       <Cta/>
//       <Footer/>
//     </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
