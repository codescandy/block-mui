import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1">
          Welcome to the blog page. This is where you can share updates, stories, and news!
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog;
