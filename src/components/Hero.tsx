import { Box, Button, Chip, Container, Grid, Typography, Paper, Badge } from '@mui/material';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';


const MyComponent = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          content: '""',
          backgroundImage: "url('/images/pattern-square.svg')",
          backgroundPosition: 'top',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: '312px',
          padding: '40px 0',
          maskImage: 'linear-gradient(0deg, transparent 35%, #000 75%)',
          WebkitMaskImage: 'linear-gradient(0deg, transparent 35%, #000 75%)',
          zIndex: -1,
        },
      }}
    />
  );
};
const Hero = () => {
  return (
    <Box>
      <MyComponent />

      <Container sx={{ pt: { lg: 7, xs: 5 }, pb: { lg: 7, xs: 5 } }} maxWidth="lg">
        <Grid container alignItems="center" gap={{ lg: 8 }} justifyContent={{ lg: 'flex-start', xs: 'center' }} flexWrap={{ lg: 'nowrap', xs: 'wrap' }}>
          {/* Left Content */}
          <Grid size={{ lg: 5, xs: 12 }}>
            <Box textAlign={{ xs: 'center', lg: 'left' }}>
              <Chip label="New: Our Live collaborative just landed" variant="outlined" color="primary" sx={{ mb: 4, px: 1, py: 1, fontSize: '12px', fontWeight: '600' }} />
              <Typography variant="h2" component="h1" sx={{ fontSize: "3rem" }} gutterBottom>
                Build your next project even faster.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: "1.25rem" }} color="text.secondary">
                Block makes it easy to get your most important work done. Increase efficiency to deliver results & hit your goal on every project.
              </Typography>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Try for Free
                </Button>
                <Button variant="outlined">Book a demo</Button>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, my: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center'  }}>
                  <Box  sx={{ p: 1, borderRadius: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: '#e0e7ff', height: '40px', width: '40px' }}>
                    <CreditCardRoundedIcon color="primary" />
                  </Box>
                  <Typography sx={{ ml: 1, fontSize: '13px', color: 'gray' }}>No credit card required</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box  sx={{ p: 1, borderRadius: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: '#e0e7ff', height: '40px', width: '40px' }}>
                    <MoneyRoundedIcon color="primary" />
                  </Box>
                  <Typography sx={{ ml: 1, fontSize: '13px', color: 'gray' }}>Free until upgrade</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid size={{ lg: 7, xs: 12 }} >
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ p: { md: 4, xs: 2 }, borderRadius: 4, backgroundColor: '#f8fafc', border: 1, borderColor: '#e0e7ff' }}>
                <img src="/images/app-screen-1.jpg" alt="landing" style={{ width: '100%', borderRadius: '16px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
              </Box>
              {/* Developer Badge */}
              <Box sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', display: { xs: 'none', lg: 'block' } }}>
                <Badge color="info" badgeContent="Developer"  />
                <Box sx={{ position: 'absolute', left: '40px', top: '-15px',  }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M22.3722 2.21902C22.4794 2.32632 22.5515 2.46361 22.5791 2.61278C22.6067 2.76194 22.5884 2.91597 22.5267 3.05452L14.0412 22.1465C13.9819 22.28 13.8849 22.3933 13.7621 22.4725C13.6393 22.5517 13.4961 22.5933 13.35 22.5921C13.2039 22.591 13.0613 22.5473 12.9397 22.4662C12.8182 22.3852 12.7229 22.2704 12.6657 22.136L9.60416 14.987L2.45366 11.924C2.31974 11.8664 2.20552 11.771 2.12495 11.6496C2.04439 11.5281 2.00097 11.3857 2.00002 11.24C1.99906 11.0942 2.04061 10.9513 2.11958 10.8288C2.19854 10.7062 2.31151 10.6094 2.44466 10.55L21.5367 2.06452C21.675 2.00309 21.8287 1.98497 21.9776 2.01255C22.1265 2.04012 22.265 2.1121 22.3722 2.21902Z" fill="#0DCAF0"></path>
                              </svg>
                </Box>
              </Box>

              {/* Manager Badge */}
              <Box sx={{ position: 'absolute', bottom: '25%', left: 0, display: { xs: 'none', lg: 'block' } }}>
                <Badge color="success" badgeContent="Manager"  />
                <Box sx={{ position: 'absolute', left: '34px', top: '-15px',  }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M22.3722 2.21902C22.4794 2.32632 22.5515 2.46361 22.5791 2.61278C22.6067 2.76194 22.5884 2.91597 22.5267 3.05452L14.0412 22.1465C13.9819 22.28 13.8849 22.3933 13.7621 22.4725C13.6393 22.5517 13.4961 22.5933 13.35 22.5921C13.2039 22.591 13.0613 22.5473 12.9397 22.4662C12.8182 22.3852 12.7229 22.2704 12.6657 22.136L9.60416 14.987L2.45366 11.924C2.31974 11.8664 2.20552 11.771 2.12495 11.6496C2.04439 11.5281 2.00097 11.3857 2.00002 11.24C1.99906 11.0942 2.04061 10.9513 2.11958 10.8288C2.19854 10.7062 2.31151 10.6094 2.44466 10.55L21.5367 2.06452C21.675 2.00309 21.8287 1.98497 21.9776 2.01255C22.1265 2.04012 22.265 2.1121 22.3722 2.21902Z" fill="#4CAF50"></path>
                              </svg>
                </Box>
              </Box>

              {/* Designer Badge */}
              <Box sx={{ position: 'absolute', bottom: 0, right: '-20px', display: { xs: 'none', lg: 'block' } }}>
                <Badge color="error" badgeContent="Designer" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
                <Box sx={{ position: 'absolute', left: '-43px', top: '-22px',  }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.21946 2.21902C2.11223 2.32632 2.04007 2.46361 2.01248 2.61278C1.9849 2.76194 2.0032 2.91597 2.06496 3.05452L10.5505 22.1465C10.6097 22.28 10.7067 22.3933 10.8295 22.4725C10.9523 22.5517 11.0956 22.5933 11.2416 22.5921C11.3877 22.591 11.5303 22.5473 11.6519 22.4662C11.7735 22.3852 11.8687 22.2704 11.926 22.136L14.9875 14.987L22.138 11.924C22.2719 11.8664 22.3861 11.771 22.4667 11.6496C22.5472 11.5281 22.5906 11.3857 22.5916 11.24C22.5926 11.0942 22.551 10.9513 22.472 10.8288C22.3931 10.7062 22.2801 10.6094 22.147 10.55L3.05496 2.06452C2.91659 2.00309 2.76287 1.98497 2.61402 2.01255C2.46516 2.04012 2.32664 2.1121 2.21946 2.21902Z" fill="#DC3545"></path>
                              </svg>
                              </Box>
              </Box>

              {/* User Badge */}
              <Box sx={{ position: 'absolute', top: '10%', right: 0, display: { xs: 'none', lg: 'block' } }}>
                <Badge color="primary" badgeContent="User" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
                <Box sx={{ position: 'absolute', left: '-31px', top: '-20px',  }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.21946 2.21902C2.11223 2.32632 2.04007 2.46361 2.01248 2.61278C1.9849 2.76194 2.0032 2.91597 2.06496 3.05452L10.5505 22.1465C10.6097 22.28 10.7067 22.3933 10.8295 22.4725C10.9523 22.5517 11.0956 22.5933 11.2416 22.5921C11.3877 22.591 11.5303 22.5473 11.6519 22.4662C11.7735 22.3852 11.8687 22.2704 11.926 22.136L14.9875 14.987L22.138 11.924C22.2719 11.8664 22.3861 11.771 22.4667 11.6496C22.5472 11.5281 22.5906 11.3857 22.5916 11.24C22.5926 11.0942 22.551 10.9513 22.472 10.8288C22.3931 10.7062 22.2801 10.6094 22.147 10.55L3.05496 2.06452C2.91659 2.00309 2.76287 1.98497 2.61402 2.01255C2.46516 2.04012 2.32664 2.1121 2.21946 2.21902Z" fill="#8B3DFF"></path>
                              </svg>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
