import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import bgpic from "../../assests/bgMiddle.png";

function Statistic() {
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Box
      py={10}
      sx={{
        backgroundImage: `url(${bgpic})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Typography
          textAlign="center"
          fontSize={{ xs: "35px", md: "50px" }}
          fontWeight="700"
          mb={4}
        >
          Your Statistics
        </Typography>
        <Box
          p={2.5}
          sx={{
            border: "1px solid #B600D3",
            borderRadius: "59px",
          }}
        >
          <Box
            py={matches ? 4 : 2.5}
            px={matches ? 5 : 3}
            sx={{
              background:
                "linear-gradient(271.8deg, #161117 1.39%, #1C161E 98.41%)",
              boxShadow: "0px 0px 23px 2px #B600D3",
              borderRadius: "59px",
            }}
          >
            <Grid container spacing={5}>
              {["1", "2"].map(() => {
                return (
                  <Grid item xs={12} md={6}>
                    <Box
                      p={matches ? 4 : 2}
                      bgcolor="#101010"
                      borderRadius="17px"
                    >
                      <Box height="100px" bgcolor="#211A22"></Box>
                      <Box mt={3} height="100px" bgcolor="#211A22"></Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Statistic;
