// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ResponsiveAppBar from './AppAppBar'; // adjust path
// import Products from '../pages/Products';
// import Pricing from '../pages/Pricing';
// import Blog from '../pages/Blog';

// function App() {
//   return (
//     <>
//       <ResponsiveAppBar />
//       <Routes>
//         <Route path="/products" element={<Products />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//     </>
//   );
// }
// export default App;


import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './AppAppBar';

import Products from '../pages/Products';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';

// All homepage components
import Hero from './Hero';
import Clients from './Clients';
import Features from './Features';
import LeftImageFeatures from './LeftImageFeatures';
import RightImageFeatures from './RightImageFeatures';
import Testimonials from './Testimonials';
import AppButtons from './AppButtons';
import Cta from './Cta';
import Footer from './Footer';

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
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
