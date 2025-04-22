
import { Typography, Container, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1">
          Welcome to the contact page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
