import React from "react";
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Box from "@mui/material/Box";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import pic from "../../assests/Group 16.png";

export default () => {
  const matches = useMediaQuery("(min-width:950px)");

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={matches ? 4 : 2}
          spaceBetween={5}
          //   slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          //   navigation={{
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev",
          //   }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            // reverseDirection: 3 % 2 == 0 ? false : true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <Grid item md={3} xs={6}>
                  <SwiperSlide key={i}>
                    <Box>
                      <img
                        src={pic}
                        height={matches ? "170rem" : "100rem"}
                        width={matches ? "170rem" : "100rem"}
                      />
                    </Box>
                  </SwiperSlide>
                </Grid>
              );
            })}
          </Grid>
        </Swiper>
      </Container>
    </>
  );
};
