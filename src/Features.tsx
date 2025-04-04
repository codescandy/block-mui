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
 
      <Container  sx={{ mb: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 3 }}>
            Features
          </Typography>
          <Typography variant="h5" component={'h2'}  sx={{ mb: 2, fontWeight: '600' }}>
            Features to make you stand out
          </Typography>
          <Typography  sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary' }}>
            Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.
          </Typography>
        </Box>
        <Grid container spacing={7}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box sx={{ mb: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "primary.light", backgroundOpacity: 0.1 }}>

                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    
  );
};

export default Features;
