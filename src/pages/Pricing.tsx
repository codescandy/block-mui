
import { Typography, Container, Box } from '@mui/material';

const Pricing = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center'}}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1">
          Welcome to the Pricing page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Pricing;
