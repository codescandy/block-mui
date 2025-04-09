import { Container, Grid, Typography, Box } from "@mui/material";
import { CheckCircleOutlined, OutlinedFlagOutlined, HistoryOutlined, ViewCompactAltOutlined, AttachFileOutlined, PeopleOutlineOutlined } from "@mui/icons-material";
import { fontSize } from "@mui/system";

const features = [
  { icon: <CheckCircleOutlined color="primary" fontSize="medium" />, title: "Tasks", description: "Break work into manageable pieces for you and your team." },
  { icon: <OutlinedFlagOutlined color="primary" fontSize="medium" />, title: "Milestones", description: "Visualise significant checkpoints in your project." },
  { icon: <HistoryOutlined color="primary" fontSize="medium" />, title: "Due dates and times", description: "Specify the date and time something is due." },
  { icon: <ViewCompactAltOutlined color="primary" fontSize="medium" />, title: "Custom templates", description: "Create your own project templates." },
  { icon: <AttachFileOutlined color="primary" fontSize="medium" />, title: "Attachments", description: "Add files from various sources to any task." },
  { icon: <PeopleOutlineOutlined color="primary" fontSize="medium" />, title: "Teammate", description: "Understand teammate workloads by viewing assigned tasks." }
];

const Features = () => {
  return (
    <Box
    component="section"   sx={{ mb: 10 }} >
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 3, letterSpacing: '2px' }}>
            Features
          </Typography>
          <Typography variant="h2" component="h2"  sx={{ mb: 2, fontWeight: '600' }}>
            Features to make you stand out
          </Typography>
          <Typography  sx={{ maxWidth: '800px', mx: 'auto',  fontSize: '1.25rem' }}>
            Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.
          </Typography>
        </Box>
        <Grid container spacing={7}>
        {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "primary.light", backgroundOpacity: 0.1,
                  margin: { xs: "0 auto", md: "0", }, }}>

                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600', mt: 3, }} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
    
  );
};

export default Features;
