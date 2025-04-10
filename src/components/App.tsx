

import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './AppAppBar';
import React, { lazy } from 'react';
import Landings from '../pages/Landings';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

// All homepage components
import Hero from './Hero';
import Clients from './Clients';
import Features from './Features';
import LeftImageFeatures from './LeftImageFeatures';
import RightImageFeatures from './RightImageFeatures';
import Testimonials from './Testimonials';
import AppButtons from './AppButtons';
import Cta from './Cta';

const Footer = lazy(() => import('./Footer'));

function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <LeftImageFeatures />
      <RightImageFeatures />
      <Testimonials />
      <AppButtons />
      <Cta />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landings" element={<Landings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
