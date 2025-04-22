

import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from '../components/Header';
import React, { lazy } from 'react';
import Landings from './Landings';
import Pricing from './Pricing';
import Blog from './Blog';
import Contact from './Contact';

// All homepage components
import Hero from '../blocks/Hero';
import Clients from '../blocks/Clients';
import Features from '../blocks/Features';
import LeftImageFeatures from '../blocks/LeftImageFeatures';
import RightImageFeatures from '../blocks/RightImageFeatures';
import Testimonials from '../blocks/Testimonials';
import AppButtons from '../blocks/AppButtons';
import Cta from '../blocks/Cta';

const Footer = lazy(() => import('../components/Footer'));

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
