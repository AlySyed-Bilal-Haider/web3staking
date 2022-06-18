import { Box, Container } from "@mui/material";

import footerBG from "../assests/footerbg.png";
import footerLogo from "../assests/logoFooter.png";
import twitter from "../assests/Twitter.png";
import telegram from "../assests/Telegram.png";
import github from "../assests/github.png";
import medium from "../assests/Medium.png";

function Footer() {
  return (
    <Box
      pt={30}
      pb={15}
      sx={{
        backgroundImage: `url(${footerBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box textAlign="center">
          <img src={footerLogo} alt="" />
        </Box>
        <Box
          pt={4}
          m={"auto"}
          display="flex"
          justifyContent="space-around"
          width={{ xs: "55%", md: "25%" }}
        >
          <img src={twitter} alt="" />
          <img src={telegram} alt="" />
          <img src={github} alt="" />
          <img src={medium} alt="" />
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
