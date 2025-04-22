import { Box, Button, Container, Typography } from '@mui/material';
import '../styles/marquee.css';
import integrations from '../data/integrations'; // JSON data for integrations

// JSON data for integrations


export default function IntegrateAppsSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      {/* Header Section */}
      <Container maxWidth="md">
        <Box textAlign="center" mb={6} >
          <Typography variant="h2" component="h2" fontWeight={600} marginBottom={2} gutterBottom>
            Integrate apps with just a few clicks
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.125rem', lineHeight: 1.5 }}>
            Connect your existing apps and workflows with pre-made integrations available for 400+ popular apps, plus custom integrations for more advanced users.
          </Typography>
        </Box>
      </Container>

      {/* Marquee Section */}
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Box
          className="marquee-wrapper"
          sx={{
            overflow: 'hidden',
            position: 'relative',
            '& .marquee-content': {
              animationPlayState: 'running',
            },
          }}
        >
          <Box
            className="marquee-content"
            sx={{
              display: 'flex',
              gap: 0,
              animation: 'scroll 20s linear infinite',
              animationPlayState: 'paused',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0%)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {Array.from({ length: 2 }).map((_, idx) =>
              integrations.map((integration, index) => (
                <Button
                  key={`${idx}-${index}`}

                  startIcon={
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      width={16}
                      height={16}
                    />
                  }
                  sx={{ lineHeight: 1.6, color: '#64748b', textTransform: 'none', mx: 1, px: 7, fontSize: '14px', fontWeight: '600', borderRadius: '50px', bgcolor: '#f1f5f9' }}
                >
                  {integration.name}
                </Button>
              ))
            )}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Box
          className="marquee-wrapper"
          sx={{
            overflow: 'hidden',
            position: 'relative',
            '& .marquee-content': {
              animationPlayState: 'running',
            },
          }}
        >
          <Box
            className="marquee-content"
            sx={{
              display: 'flex',
              gap: 0,
              animation: 'marquee-left 20s linear infinite',
              animationPlayState: 'paused',
              '@keyframes marquee-left': {
                '100%': {
                  transform: 'translateX(0%)',
                },
                '0%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {Array.from({ length: 2 }).map((_, idx) =>
              integrations.map((integration, index) => (
                <Button
                  key={`${idx}-${index}`}

                  startIcon={
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      width={16}
                      height={16}
                    />
                  }
                  sx={{ lineHeight: 1.6, color: '#64748b', textTransform: 'none', mx: 1, px: 7, fontSize: '15px', fontWeight: '600', borderRadius: '50px', bgcolor: '#f1f5f9' }}
                >
                  {integration.name}
                </Button>
              ))
            )}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Box
          className="marquee-wrapper"
          sx={{
            overflow: 'hidden',
            position: 'relative',
            '& .marquee-content': {
              animationPlayState: 'running',
            },
          }}
        >
          <Box
            className="marquee-content"
            sx={{
              display: 'flex',
              gap: 0,
              animation: 'scroll 20s linear infinite',
              animationPlayState: 'paused',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0%)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {Array.from({ length: 2 }).map((_, idx) =>
              integrations.map((integration, index) => (
                <Button
                  key={`${idx}-${index}`}

                  startIcon={
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      width={16}
                      height={16}
                    />
                  }
                  sx={{ lineHeight: 1.6, color: '#64748b', textTransform: 'none', mx: 1, px: 7, fontSize: '14px', fontWeight: '600', borderRadius: '50px', bgcolor: '#f1f5f9' }}
                >
                  {integration.name}
                </Button>
              ))
            )}
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Get Started
          </Button>
          <Button variant="text">See all integrations</Button>
        </Box>
      </Container>
    </Box>
  );
}