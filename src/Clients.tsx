import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Container, Grid, Typography, Badge } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Clients = () => {
  const clientLogos = [
    './public/images/client-logo/clients-logo-1.svg',
    './public/images/client-logo/clients-logo-2.svg',
    './public/images/client-logo/clients-logo-3.svg',
    './public/images/client-logo/clients-logo-4.svg',
    './public/images/client-logo/clients-logo-5.svg',
  ];

  return (
    <Box my={10} py={5}>
      <Container sx={{ py:2 }} maxWidth="lg">
        <Box sx={{ display:"flex", justifyContent:"center", mb: '40px', textAlign:"center"}}>
          <Typography variant="body2" fontWeight="600" textTransform="uppercase" letterSpacing={1}>
            Trusted by <Typography component="span" fontWeight="700" color="text.primary">20,000+</Typography> organizations worldwide
          </Typography>
        </Box>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          speed={400}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-6"
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
