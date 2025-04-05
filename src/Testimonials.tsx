import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: '/public/images/testimonial/testimonial-img-1.jpg',
    logo: '/public/images/client-logo/logoipsum-3.svg',
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: 'Katherine Moss',
    role: 'Operational Manager at Block Studio',
  },
  {
    image: '/public/images/testimonial/testimonial-img-2.jpg',
    logo: '/public/images/client-logo/logoipsum-2.svg',
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: 'John Doe',
    role: 'CTO at PixelCraft',
  },
  {
    image: '/public/images/testimonial/testimonial-img-3.jpg',
    logo: '/public/images/client-logo/logoipsum-1.svg',
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: 'Samantha Lee',
    role: 'Product Designer at Creatify',
  },
];

const Testimonials = () => {
  return (
    <Box py={{ xs: 5, lg: 10 }} bgcolor="grey.100">
      <Container>
        <Box textAlign="center" mb={7}>
          <Typography variant="subtitle2" color="primary" fontWeight={600} textTransform="uppercase" letterSpacing={1}>
            Testimonial
          </Typography>
          <Typography variant="h4" component="h2" fontWeight={600} mt={2}>
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
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ overflow: 'hidden', maxWidth: 1020, mx: 'auto', borderRadius: 4 }}>
                <Grid container alignItems="center">
                  <Grid size={{ lg: 4 }}  sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Box component="img" src={item.image} alt="testimonial" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Grid>
                  <Grid size={{ lg: 8, xs: 12 }}>
                    <CardContent sx={{ p: { xs: 3, lg: 4 } }}>
                      <Box mb={4}>
                        <Box component="img" src={item.logo} alt="client logo" sx={{ maxWidth: 120 }} />
                      </Box>
                      <Typography variant="h6" color="text.secondary" mb={5}>
                        {item.text}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', fontWeight: '600'}}>{item.name}</Typography>
                      <Typography sx={{ fontSize: '12px', fontWeight: '600'}} color="text.secondary">
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
