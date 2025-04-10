import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
  } from '@mui/material';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';

  const avatarData = [
    {

      img: '/images/avatar/avatar-4.jpg',

    },
    {

      img: '/images/avatar/avatar-5.jpg',

    },
    {

        img: '/images/avatar/avatar-6.jpg',

      },


  ];

  const RightImageFeatures = () => {
    return (
      <Box component="section" sx={{ pb: 6, my: { xl: 6 } }}>
        <Container>
          <Grid container alignItems="center" spacing={4}>
            {/* Left Text */}

            <Grid size= {{xs: 12, md: 6, lg: 6 }} >
            <Box sx={{ position: 'relative',  }}>
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
                    margin:  '24px',
                    width: 'calc(100% - 48px)',
                    mb: 4,
                  }}
                >
                  {avatarData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',

                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={item.img} sx={{ width: 40, height: 40, }} />

                      </Box>

                    </Box>
                  ))}
                </Stack>
              </Box>

            </Grid>

            {/* Right Image and Overlays */}
            <Grid  size= {{xs: 12, md: 6, lg: 5 }} sx={{ ml: { lg: '8.3333%' } }}>

            <Box >
            <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 3, letterSpacing: '2px' }}>
               Collaborate
                </Typography>
                <Box mt={4} mb={0}>
                <Typography variant="h2" component="h2"  gutterBottom>
                  Move team ideas to action, faster.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 2 }} >
                  Collaborate and build total alignment on your project by adding comments to any task or document.
                  </Typography>
                </Box>
                <List sx={{ my: 1 }}>
    {[
      'Fusce ultricies velit fel dignissim',
      'Suspendisse potenti. Mauris et ipsum odio.',
      'Pellentesque imperdiet blandit pretium.',
    ].map((text, index) => (
      <ListItem key={index} disableGutters sx={{ py: 0 }}>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <CheckCircleOutlined color="primary" fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ textTransform: 'none' }}>
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  export default RightImageFeatures;
