import React, { memo } from "react";
import {
  Container,
  Button,
  Grid,
  Box,
  useMediaQuery,
  Paper,
  Typography,
} from "@mui/material";

import Headerbg from "../../images/homebg.png";
import Fillicons from "../../images/fillicons.png";
import Combinedshapefirst from "../../images/CombinedShapefirst.png";
import Combinedshapesecond from "../../images/CombinedShapesecond.png";
import Combinedshapethird from "../../images/CombinedShapethird.png";
import Solona from "../../images/solana.png";
import Coinmart from "../../images/Coinmarket.png";
import Bitmart from "../../images/Bitmart.png";
import Gate from "../../images/gate.png";

const Main = memo(() => {
  const match = useMediaQuery("(max-width:'700px')");
  const socialIcon = {
    width: "30px",
    height: "30px",
    margin: "15px 0px 0px 15px",
  };

  return (
    <>
      <Box
        pt={10}
        pb={45}
        sx={{
          backgroundImage: `url(${Headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      // width: "86%",
                      fontSize: "28px",
                      fontWeight: "700",
                      // m: "auto",
                    }}
                  >
                    FUNDRAISING AND TRADING PLATFORM ON SOLANA
                  </Typography>
                  <Typography
                    sx={{
                      py: 2,
                      // width: { md: "93%", xs: "95%" },
                      // pl: { md: 0, xs: 1 },
                      // m: "auto",
                      fontSize: "20px",
                    }}
                  >
                    Solanium is the go-to platform for the Solana blockchain.
                    Invest in the hottest Solana projects, stake your tokens,
                    trade on our DEX, manage your Solana wallet and participate
                    in our (future) governance.
                    <br />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={Fillicons} alt="Fills icons" />
                    </Box>
                  </Typography>
                  <Button
                    sx={{
                      background:
                        "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
                      boxShadow: "0px 0px 17px rgba(182, 0, 211, 0.8)",
                      borderRadius: "12px",
                      color: "#fff",
                      py: 2,
                      textTransform: "capitalize",
                      height: "58px",
                      width: "244px",
                      fontSize: "18px",
                      fontFamily: "Roboto",

                      "&:hover": {
                        background:
                          "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
                      },
                    }}
                  >
                    STAKE SLIM
                  </Button>
                  <Box sx={{ width: "244px", py: 3 }}>
                    <img src={Combinedshapefirst} alt="" style={socialIcon} />
                    <img src={Combinedshapesecond} alt="" style={socialIcon} />
                    <img
                      src={Combinedshapethird}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        margin: "15px 5px 0px 0px",
                        float: "right",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ paddingLeft: "12px" }}>
                  Powered by{" "}
                  <img
                    src={Solona}
                    alt=""
                    style={{ width: "32px", height: "32px", margin: "5px" }}
                  />{" "}
                  Solona
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 3,
                  position: "relative",
                }}
              >
                <img
                  src={Gate}
                  alt=""
                  style={{
                    width: match ? "120px" : "43%",
                    height: "43px",
                    margin: "5px",
                  }}
                />
                <img
                  src={Bitmart}
                  alt=""
                  style={{
                    width: match ? "100px" : "33%",
                    height: "43px",
                    margin: "5px",
                  }}
                />
                <img
                  src={Coinmart}
                  alt=""
                  style={{
                    width: match ? "70px" : "23%",
                    height: "41px",
                    margin: "5px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                position="relative"
                sx={{
                  width: { md: "95%", xs: "98%" },
                  mt: { md: 25, xs: 2 },
                  p: 1,
                }}
              >
                <Box
                  mt={5}
                  p={4}
                  px={2}
                  bgcolor="#000000"
                  border="2px solid #B600D3"
                  boxShadow="0px 0px 6px rgba(252, 252, 252, 0.5)"
                  borderRadius="25px"
                  width="100%"
                  maxWidth="100%"
                  position="relative"
                  zIndex="1"
                >
                  <Box sx={{ fontSize: { md: "15px", xs: "12px" } }}>
                    <Box
                      sx={{
                        color: "text.primary",
                        my: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        py: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "900",
                            fontSize: "14px",
                          }}
                        >
                          TOTAL VALUE STAKED
                        </Typography>
                        <Typography sx={{ fontSize: "24px" }}>
                          $21,610,291
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "text.primary",
                        my: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        py: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "900",
                            fontSize: "14px",
                          }}
                        >
                          SLIM STAKED
                        </Typography>
                        <Typography sx={{ fontSize: "24px" }}>
                          12,424,686{" "}
                          <span style={{ fontSize: "12px" }}>SLIM</span>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          SLIM-LP STAKED
                        </Typography>
                        <Typography sx={{ fontSize: "24px" }}>
                          2,559,348{" "}
                          <span style={{ fontSize: "12px" }}>SLIM</span>
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: "text.primary",
                        mt: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        py: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "900",
                            fontSize: "14px",
                          }}
                        >
                          UNIQUE STAKERS
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "24px",
                          }}
                        >
                          4,054
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          py: 1,
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: " flex-start",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: "900",
                              fontSize: "14px",
                            }}
                          >
                            AVERAGE APY
                          </Typography>
                          <Typography sx={{ fontSize: "24px" }}>
                            55%{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    border: "2px solid #B600D3",
                    boxShadow: "0px 17px 46px 2px #B600D3",
                    borderRadius: "25px",
                    width: match ? "97%" : "100%",
                    maxWidth: "100%",
                    minHeight: "340px",
                    right: "-2%",
                    top: "15%",
                    zIndex: "0",
                    pb: 2,
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
});

export default Main;
