import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper.css';
import testimonials from '../data/testimonials';



const Testimonials = () => {
  return (
    <Box component="section" py={{ xs: 5, lg: 10 }} bgcolor="grey.100">
      <Container>
        <Box textAlign="center" mb={7}>
        <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" sx={{ mb: 2, letterSpacing: '2px' }}>
            Testimonial
          </Typography>
          <Typography variant="h2" component="h2">
            Our happy customers love us
          </Typography>
        </Box>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}

          autoplay={{ delay: 3000 }}
          speed={400}
          className='custom-swiper'

        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ overflow: 'hidden', maxWidth: 1020, mx: 'auto', borderRadius: 4, lineHeight: '0', boxShadow: 0, border: 1, borderColor: 'grey.200' }}>
                <Grid container alignItems="center" flexWrap='nowrap'>
                  <Grid size={{ lg: 4 }}  sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box component="img" src={item.image} alt="testimonial" sx={{ width: '100%', maxHeight: '100%' }} />
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <CardContent sx={{ p: { xs: 3, lg: 4 } }}>
                      <Box mb={4}>
                        <Box component="img" src={item.logo} alt="client logo" sx={{ maxWidth: '100%' }} />
                      </Box>
                      <Typography variant="body2"  sx={{ fontSize: '1.25rem', color: 'grey.600' }}  mb={5}>
                        {item.text}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', fontWeight: '600', mb: "6px" }}>{item.name}</Typography>
                      <Typography variant='body2' sx={{ fontSize: '13px', color: 'grey.400'}} >
                        {item.role}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
