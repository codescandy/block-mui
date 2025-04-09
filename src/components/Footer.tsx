
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // md and up

  const footerSections = [
    {
      title: 'Service',
      items: [
        'Web App Development',
        'Front End Development',
        'MVP Development',
        'Digital Marketing',
        'Content Writing',
      ],
    },
    {
      title: 'About Us',
      items: ['Case Studies', 'Blog', 'Services', 'About', 'Career'],
    },
    {
      title: 'Technology',
      items: ['Next.js', 'Sanity', 'Contentful', 'Vercel', 'Netlify'],
    },
    {
      title: 'Locations',
      items: ['India', 'Australia', 'Brazil', 'Canada'],
    },
  ];

  
  return (
    <Box component="footer" sx={{ pt: 8, bgcolor: 'background.default' }}>
      <Container>
        <Grid container spacing={0}>
          {footerSections.map((section, idx) => (
     
            <Grid sx={{ gap: 0 }} size={{ xs: 12, md:3,  }} key={idx}>
              <Accordion
                defaultExpanded={isDesktop}
                disabled={isDesktop} 
               
                
                sx={{
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  '&.Mui-disabled': {
    opacity: 1,
    backgroundColor: 'transparent',
    color: 'inherit',
    
    '& .MuiAccordionSummary-root, & .MuiAccordionSummary-content, & .MuiTypography-root': {
      opacity: 1,
      
      ":hover": { color: 'primary.main' }

      
   
      
    },
  },
                  
                }}
              >
               <AccordionSummary   sx={{ p: 0, height: '0px',  }}
        expandIcon={!isDesktop ? <ExpandMoreIcon /> : null} // 👈 Show icon only on mobile/iPad
        aria-controls="panel-content"
        id="panel-header"
        
      >
                  <Typography variant="h4" component='h4' sx={{ m: 0,}} >{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, lineHeight: 2,  }}>
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link href="#" underline="none"  sx={{ fontWeight: 500,  color: 'grey.600', }}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>

        {/* Headquarters */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12, md:7,}}>
            <Typography variant="h4" component="h4" gutterBottom>
              Headquarters
            </Typography>
            <Typography variant="body2" >
              Codescandy, 412, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India 560025
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Grid container spacing={2} sx={{ mt: 6, pb: 4 }} alignItems="center">
        <Grid size={{ xs: 12, md:3,}} textAlign={{ xs: 'center', md: 'left' }}>
            <Box component="a" href="/" sx={{ display: 'inline-block' }}>
              <img src='/images/logo.svg' alt="Logo" style={{ height: 36 }} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md:6,}}>
            <Typography variant="body2" align="center">
              © 2024 <Link href="#" color="primary">Block Bootstrap 5 Theme</Link> | Designed by{' '}
              <Link href="#" color="primary">CodesCandy</Link>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md:3,}} textAlign={{ xs: 'center', md: 'right' }} >
            <IconButton href="#" aria-label="Instagram" sx={{ color: 'primary.main'}}><InstagramIcon /></IconButton>
            <IconButton href="#" aria-label="Facebook" sx={{ color: 'primary.main'}}><FacebookIcon /></IconButton>
            <IconButton href="#" aria-label="Twitter" sx={{ color: 'primary.main'}}><TwitterIcon /></IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
