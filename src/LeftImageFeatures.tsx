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
  
  const avatarData = [
    {
      name: 'Jitu Doe',
      img: '../public/images/avatar/avatar-1.jpg',
      role: 'Designer',
      color: 'primary',
    },
    {
      name: 'Anita Par',
      img: '../public/images/avatar/avatar-2.jpg',
      role: 'UI Developer',
      color: 'info',
    },
    {
      name: 'Sandip',
      img: '../public/images/avatar/avatar-4.jpg',
      role: 'Stack Developer',
      color: 'success',
    },
  ];
  
  const LeftImageFeatures = () => {
    return (
      <Box component="section" sx={{ py: 10, my: { xl: 14 } }}>
        <Container>
          <Grid container alignItems="center" spacing={4}>
            {/* Left Text */}
            <Grid size= {{xs: 12, md: 6, lg: 5 }} >
              <Box data-cue="fadeIn">
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'primary.main', textTransform: 'uppercase', fontWeight: 600, letterSpacing: 1 }}
                >
                  Visualize & plan
                </Typography>
                <Box mt={4} mb={5}>
                  <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
                    Build the perfect workflow for every project.
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Track your entire project from start to finish with beautiful views that make project planning a breeze.
                  </Typography>
                </Box>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ textTransform: 'none' }}>
                  Learn More
                </Button>
              </Box>
            </Grid>
  
            {/* Right Image and Overlays */}
            <Grid  size={6} sx={{ ml: { lg: '8.3333%' } }}>
    
              <Box sx={{ position: 'relative',  }}>
                <Box
                  component="img"
                  src="/public/images/saas/saas-img-1.jpg"
                  alt="landing"
                  sx={{ borderRadius: 4, width: '100%' }}
                />
  
                <Stack
                  spacing={2}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    margin: { lg: '24px' },
                    width: 'calc(100% - 48px)',
                    mb: 2,
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
                          fontWeight: 600,
                          borderRadius: 5,
                          bgcolor: `${item.color}.main`,
                          color: `${item.color}.contrastText`,
                          opacity: 1,
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
  