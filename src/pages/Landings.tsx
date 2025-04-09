import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Landings = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center'}}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Landings
        </Typography>
        <Typography variant="body1">
          Welcome to the Landings page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Landings;
