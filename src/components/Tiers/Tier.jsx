import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AppContext } from "../../utils";
import {
  useStakingContract,
  useTokenContract,
} from "../../ConnectivityAss/hooks";
import { stakingAddress } from "../../ConnectivityAss/environment";
import Loading from "../../loading";

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
        width: "85%",
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

const PlanButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        fontSize: { xs: "16px", md: "18px" },
        width: "114px",
        height: "40px",
        marginTop: "15px",
        marginLeft: "15px",
        "&:hover": {
          backgroundColor: "#2d292ea1",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Tier() {
  const matches = useMediaQuery("(min-width:720px)");
  const [loading, setLoading] = useState(false);
  const { account, signer, connect, disconnect } = useContext(AppContext);
  const [plan, setPlan] = useState(0);
  const [amount, setAmount] = useState("");
  const [revenue, setRevenue] = useState(0);

  let stakeContract = useStakingContract(signer);
  console.log(stakeContract);
  let tokenContract = useTokenContract(signer);

  //---------Calculations of getting bonus-----------
  const initBonus = async () => {
    try {
      let percentDivide = await stakeContract.percentDivider();
      let bonus = await stakeContract.Bonus(+plan);
      let reward = (+bonus / +percentDivide) * +amount;

      setRevenue(+amount + +reward);
      console.log("bonus", +bonus);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initBonus();
  }, [amount, plan]);
  ////////////////////////////////////////////////////

  //-----------function for stake the tokens and here we use approve
  //  funtion of main token contract bcz first aprove than stake---------------

  const stakeHandler = async () => {
    if (account) {
      if (!amount) {
        toast.error("Please, enter the amount");
      } else {
        try {
          setLoading(true);
          let decimal = await tokenContract.decimals();
          let approveForStake = await tokenContract.approve(
            stakingAddress,
            parseUnits(amount.toString(), +decimal)
          );
          await approveForStake.wait();

          let stakeTransation = await stakeContract.stake(
            parseUnits(amount.toString(), +decimal),
            +plan
          );
          await stakeTransation.wait();
          toast.success("transation confrimed");
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    } else {
      toast.error("Please connect your wallet first");
    }
  };

  /////////////////////////////////////////////////////////////////////////////

  return (
    <Box my={10}>
      <Loading loading={loading} />
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
              A.A Calculator
            </Typography>
            <Typography
              px={2}
              py={2}
              textAlign="center"
              fontSize={{ xs: "14px", md: "16px" }}
            >
              Calculate your A.A depending on the amount of staked tokens and
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
                A.A
                <input
                  placeholder="Enter amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    height: "57px",
                    width: matches ? "244px" : "100%",
                    // textAlign: "right",
                    color: "#C9C8C8",
                    paddingLeft: "20px",
                    fontSize: matches ? "20px" : "16px",
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

            <Box
              p={2}
              backgroundColor={"#120D13"}
              fontSize={{ xs: "18px", md: "25px" }}
            >
              Lock token for:
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent={{ xs: "center", md: "space-between" }}
              >
                <PlanButton onClick={() => setPlan(0)}>7 days</PlanButton>
                <PlanButton onClick={() => setPlan(1)}>14 days</PlanButton>
                <PlanButton onClick={() => setPlan(2)}>21 days</PlanButton>
                <PlanButton onClick={() => setPlan(3)}>30 days</PlanButton>
                <PlanButton onClick={() => setPlan(4)}>60 days</PlanButton>
              </Box>
            </Box>

            <Box textAlign="center" pt={2}>
              <ArrowDownwardIcon fontSize="large" />
            </Box>
            <Box textAlign={"center"}>
              <Box fontSize={{ xs: "30px", md: "42px" }}>
                {revenue}
                <spna style={{ fontSize: "14px", paddingLeft: "7px" }}>
                  A.A
                </spna>
              </Box>
              <Box mt={1} fontSize={{ xs: "16px", md: "20px" }}>
                locked until 9/1/2022
              </Box>
            </Box>

            {/* ------------connnect button---------- */}
            <Box mt={3} textAlign="center">
              <StyledButtton onClick={stakeHandler}>Stake Tokens</StyledButtton>
              {/* {account ? (
                <StyledButtton onClick={() => disconnect()}>
                  {account.slice(0, 4) + "..." + account.slice(-4)}
                </StyledButtton>
              ) : (
                <StyledButtton onClick={() => connect()}>
                  connect wallet
                </StyledButtton>
              )} */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Tier;
