import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import avatarData from '../data/leftfeature'; // Adjust the import path as necessary


const LeftImageFeatures = () => {
  return (
    <Box component="section" sx={{ py: 10, my: { xl: 14 } }}>
      <Container>
        <Grid container alignItems="center" spacing={4}>
          {/* Left Text */}
          <Grid size={{ xs: 12, md: 6, lg: 5 }} >
            <Box>
              <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 3, letterSpacing: '2px' }}>
                Visualize & plan
              </Typography>
              <Box mt={4} mb={5}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Build the perfect workflow for every project.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.25rem' }} >
                  Track your entire project from start to finish with beautiful views that make project planning a breeze.
                </Typography>
              </Box>
              <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ textTransform: 'none' }}>
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Image and Overlays */}
          <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ ml: { lg: '8.3333%' } }}>

            <Box sx={{ position: 'relative', }}>
              <Box
                component="img"
                src="/images/saas/saas-img-1.jpg"
                alt="landing"
                sx={{ borderRadius: 4, width: '100%' }}
              />

              <Stack
                spacing={2}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  margin: '24px',
                  width: 'calc(100% - 48px)',
                  mb: 4,
                }}
              >
                {avatarData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      boxShadow: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={item.img} sx={{ width: 32, height: 32, mr: 1 }} />
                      <Typography variant="body2" noWrap>
                        {item.name}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.role}
                      variant="outlined"
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        borderRadius: 5,
                        bgcolor: `${item.color}.main`,
                        color: `${item.color}.contrastText`,
                        opacity: 1,
                        border: 0,
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LeftImageFeatures;
