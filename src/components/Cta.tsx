
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";


const CTA = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      py={5}
   
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            background: `linear-gradient(rgb(155, 88, 255), rgb(136, 55, 255) 47.92%, rgb(122, 32, 255))`,
            borderRadius: 3,
            px: { xs: 3, md: 7 },
            py: { xs: 5, md: 8 },
            textAlign: "center",
            color: "#fff",
            position: "relative",
            zIndex: 1,
            '&::after': {
          content: '""',
          backgroundImage: "url('/images/pattern-square.svg')",
          backgroundPosition: 'top',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: '312px',
          padding: '40px 0',
          maskImage: 'linear-gradient(0deg, transparent 55%, rgb(0, 0, 0) 75%)',
          WebkitMaskImage: 'linear-gradient(0deg, transparent 55%, rgb(0, 0, 0) 75%)',
          zIndex: -1,
        },
          }}
        >
          <Typography variant="h2" component="h2" fontWeight={600} color="white" gutterBottom>
            Try our powerful work management tools
          </Typography>
          <Typography variant="body1" mb={4} fontSize={14}>
            Sign up for a free two-week trial of Block today — no credit card required.
          </Typography>

          <form
            className="needs-validation"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              // handle submission logic here
            }}
          >
            <Grid container spacing={2} justifyContent="center" maxWidth="sm" mx="auto">
              <Grid size={{ xs: 12, md:7 }} >
              <TextField
  fullWidth
  type="email"
  placeholder="Enter your business email"
  variant="outlined"
  size="small"
  required
  sx={{
    backgroundColor: "#fff",
    borderRadius: 2,
  }}
  slotProps={{
    input: {
      sx: {
        height: 44,         // Controls the input element's height
        fontSize: "0.875rem", // Text size
        padding: "0 8px",  // Left-right padding
      },
    },
  }}
/>
              </Grid>
              <Grid size={{ xs: 12, md:5 }} >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: theme => theme.palette.primary.dark }}
                  fullWidth
                 
                >
                  Get notified for free
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
