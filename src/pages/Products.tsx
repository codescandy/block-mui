import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Products = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        <Typography variant="body1">
          Welcome to the Products page. This is where you can share updates, stories, and news!
        </Typography>
      </Box>
    </Container>
  );
};

export default Products;
