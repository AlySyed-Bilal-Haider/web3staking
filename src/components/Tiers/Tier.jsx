import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useContext } from "react";

import { AppContext } from "../../utils";

const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "26px",
        color: "#fff",
        textTransform: "capitalize",
        height: "70px",
        width: "100%",
        fontSize: { xs: "22px", md: "30px" },
        fontFamily: "Roboto",
        "&:hover": {
          background:
            "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Tier() {
  const { account, connect, disconnect } = useContext(AppContext);
  const matches = useMediaQuery("(min-width:720px)");

  return (
    <Box my={10}>
      <Container maxWidth="md">
        <Box
          px={matches ? 10 : 4}
          pt={3}
          pb={7}
          sx={{
            border: "1px solid #B600D3",
            borderRadius: "59px",
          }}
        >
          <Typography
            textAlign="center"
            fontSize={{ xs: "35px", md: "50px" }}
            fontWeight="700"
            mb={3}
          >
            Tiers
          </Typography>

          {/* ----------Inner Box----------  */}
          <Box
            px={matches ? 7 : 2}
            py={4}
            sx={{
              background:
                "linear-gradient(271.8deg, #161117 1.39%, #1C161E 98.41%)",
              boxShadow: "0px 0px 23px 2px #B600D3",
              borderRadius: "59px",
            }}
          >
            <Typography
              textAlign="center"
              fontSize={{ xs: "18px", md: "25px" }}
              fontWeight="700"
            >
              xSLIM Calculator
            </Typography>
            <Typography
              px={2}
              py={2}
              textAlign="center"
              fontSize={{ xs: "14px", md: "16px" }}
            >
              Calculate your xSLIM depending on the amount of staked tokens and
              your lock time.
            </Typography>

            {/* ------------calculation part--------- */}
            <Box bgcolor={"#120D13"} py={2} px={matches ? 4 : 2}>
              <Stack
                direction={matches ? "row" : "column"}
                justifyContent="space-between"
                alignItems={matches ? "center" : ""}
                fontSize={{ xs: "18px", md: "25px" }}
              >
                SLIM
                <input
                  style={{
                    height: "57px",
                    width: matches ? "244px" : "100%",
                    textAlign: "right",
                    color: "#C9C8C8",
                    paddingRight: "40px",
                    fontSize: matches ? "25px" : "18px",
                    background: "#211A22",
                    border: "none",
                  }}
                />
              </Stack>

              <Typography py={1} fontSize="12px" color="#C9C8C8">
                and / or
              </Typography>

              <Stack
                direction={matches ? "row" : "column"}
                justifyContent="space-between"
                alignItems={matches ? "center" : ""}
                fontSize={{ xs: "18px", md: "25px" }}
              >
                SLIM-LP
                <input
                  style={{
                    height: "57px",
                    width: matches ? "244px" : "100%",
                    textAlign: "right",
                    color: "#C9C8C8",
                    paddingRight: "40px",
                    fontSize: matches ? "25px" : "18px",
                    background: "#211A22",
                    border: "none",
                  }}
                />
              </Stack>
            </Box>
            {/* ////////////////////////////// */}
            <Box fontSize={{ xs: "32px", md: "44px" }} textAlign="center">
              +
            </Box>

            <Stack
              py={2}
              //   px={matches ? 4 : 2}
              backgroundColor={"#120D13"}
              direction="row"
              justifyContent="space-around"
              flexWrap={"wrap"}
              alignItems="center"
              fontSize={{ xs: "18px", md: "25px" }}
            >
              Lock token for
              <Button
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: { xs: "18px", md: "25px" },
                  width: { xs: "50px", md: "114px" },
                  height: { xs: "30px", md: "40px" },
                  "&:hover": {
                    backgroundColor: "#2d292ea1",
                  },
                }}
              >
                365
              </Button>
              <Typography fontSize={{ xs: "16px", md: "24px" }}>
                days
              </Typography>
            </Stack>

            <Box textAlign="center" pt={2}>
              <ArrowDownwardIcon fontSize="large" />
            </Box>
            <Box textAlign={"center"}>
              <Box fontSize={{ xs: "30px", md: "42px" }}>
                5,000.00
                <spna style={{ fontSize: "14px", paddingLeft: "7px" }}>
                  xSLIM
                </spna>
              </Box>
              <Box mt={1} fontSize={{ xs: "16px", md: "20px" }}>
                locked until 9/1/2022
              </Box>
            </Box>

            {/* ------------connnect button---------- */}
            <Box mt={3} textAlign="center">
              {account ? (
                <StyledButtton onClick={() => disconnect()}>
                  {account.slice(0, 4) + "..." + account.slice(-4)}
                </StyledButtton>
              ) : (
                <StyledButtton onClick={() => connect()}>
                  connect wallet
                </StyledButtton>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Tier;
