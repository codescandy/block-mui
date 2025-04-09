import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center'}}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1">
          Welcome to the blog page. 
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog;
