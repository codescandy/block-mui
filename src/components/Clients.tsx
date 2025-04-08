import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Container, Grid, Typography, Badge } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../theme/swiper.css';

const Clients = () => {
  const clientLogos = [
    '/images/client-logo/clients-logo-1.svg',
    '/images/client-logo/clients-logo-2.svg',
    '/images/client-logo/clients-logo-3.svg',
    '/images/client-logo/clients-logo-4.svg',
    '/images/client-logo/clients-logo-5.svg',
  ];

  return (
    <Box my={8}>
      <Container sx={{ py:2 }} maxWidth="lg">
        <Box sx={{ display:"flex", justifyContent:"center", mb: '40px', textAlign:"center"}}>
          <Typography variant="body2" fontWeight="600" textTransform="uppercase" letterSpacing={1}>
            Trusted by <Typography component="span" fontWeight="700" color="text.primary">20,000+</Typography> organizations worldwide
          </Typography>
        </Box>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          speed={400}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            430: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="custom-swiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box textAlign="center">
                <img src={logo} alt="Client Logo" style={{ margin: 'auto' }} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Clients;
