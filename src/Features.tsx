import { Container, Grid, Typography, Box } from "@mui/material";
import { CheckCircle, Flag, History, ViewCompact, AttachFile, People } from "@mui/icons-material";

const features = [
  { icon: <CheckCircle color="primary" fontSize="large" />, title: "Tasks", description: "Break work into manageable pieces for you and your team." },
  { icon: <Flag color="primary" fontSize="large" />, title: "Milestones", description: "Visualise significant checkpoints in your project." },
  { icon: <History color="primary" fontSize="large" />, title: "Due dates and times", description: "Specify the date and time something is due." },
  { icon: <ViewCompact color="primary" fontSize="large" />, title: "Custom templates", description: "Create your own project templates." },
  { icon: <AttachFile color="primary" fontSize="large" />, title: "Attachments", description: "Add files from various sources to any task." },
  { icon: <People color="primary" fontSize="large" />, title: "Teammate", description: "Understand teammate workloads by viewing assigned tasks." }
];

const Features = () => {
  return (
    <section className="my-20 py-10">
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 2 }}>
            Features
          </Typography>
          <Typography variant="h4" component={'h2'} className="my-3">
            Features to make you stand out
          </Typography>
          <Typography variant="body1" className="max-w-2xl mx-auto">
            Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.
          </Typography>
        </Box>
        <Grid container spacing={7}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4}}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box className="icon-lg icon-shape rounded bg-primary bg-opacity-10 border border-primary-subtle mb-5 flex items-center justify-center w-16 h-16 mx-auto md:mx-0">
                  {feature.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
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
    </section>
  );
};

export default Features;
