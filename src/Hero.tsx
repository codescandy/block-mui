import { Box, Button, Chip, Container, Grid, Typography, Paper, Badge } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import heroImage from '../public/images/app-screen-1.jpg';

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
    <Box sx={{ pt: { lg: 0, xs: 5 } }}>
      <MyComponent />

      <Container sx={{ pt: { lg: 7, xs: 5 }, pb: { lg: 7, xs: 5 } }} maxWidth="lg">
        <Grid container alignItems="center" gap={8} justifyContent={{ lg: 'flex-start', xs: 'center' }} flexWrap={{ lg: 'nowrap', xs: 'wrap' }}>
          {/* Left Content */}
          <Grid size={{ lg: 5, xs: 12 }}>
            <Box textAlign={{ xs: 'center', lg: 'left' }}>
              <Chip label="New: Our Live collaborative just landed" variant="outlined" color="primary" sx={{ mb: 4, px: 3, py: 1, fontSize: '1rem' }} />
              <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }} gutterBottom>
                Build your next project even faster.
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }} color="text.secondary">
                Block makes it easy to get your most important work done. Increase efficiency to deliver results & hit your goal on every project.
              </Typography>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Try for Free
                </Button>
                <Button variant="outlined">Book a demo</Button>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, my: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Paper elevation={3} sx={{ p: 1, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CreditCardIcon color="primary" />
                  </Paper>
                  <Typography sx={{ ml: 2 }}>No credit card required</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Paper elevation={3} sx={{ p: 1, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MonetizationOnIcon color="primary" />
                  </Paper>
                  <Typography sx={{ ml: 2 }}>Free until upgrade</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid size={{ lg: 7, xs: 12 }} sx={{ mt: { xs: 5, lg: 0 } }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ p: { md: 4, xs: 2 }, borderRadius: 4, backgroundColor: '#f8fafc', border: 1, borderColor: '#e0e7ff' }}>
                <img src={heroImage} alt="landing" style={{ width: '100%', borderRadius: '16px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
              </Box>
              {/* Developer Badge */}
              <Box sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', display: { xs: 'none', lg: 'block' } }}>
                <Badge color="info" badgeContent="Developer" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
              </Box>

              {/* Manager Badge */}
              <Box sx={{ position: 'absolute', bottom: '50%', left: 0, display: { xs: 'none', lg: 'block' } }}>
                <Badge color="success" badgeContent="Manager" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
              </Box>

              {/* Designer Badge */}
              <Box sx={{ position: 'absolute', bottom: 0, right: 0, display: { xs: 'none', lg: 'block' } }}>
                <Badge color="error" badgeContent="Designer" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
              </Box>

              {/* User Badge */}
              <Box sx={{ position: 'absolute', top: 0, right: 0, display: { xs: 'none', lg: 'block' } }}>
                <Badge color="primary" badgeContent="User" sx={{ p: 1, borderRadius: '999px', fontSize: '16px' }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
