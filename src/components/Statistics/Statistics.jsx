import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { formatUnits } from "@ethersproject/units";

import { AppContext } from "../../utils";
import {
  useStakingContract,
  useTokenContract,
} from "../../ConnectivityAss/hooks";
import Loading from "../../loading";

import bgpic from "../../assests/bgMiddle.png";

function Statistic() {
  const matches = useMediaQuery("(min-width:700px)");
  const [loading, setLoading] = useState(false);
  const { account, signer } = useContext(AppContext);
  // const [arrayOfRecord, setArrayofRecord] = useState([]);
  let [totalBalance, setTotalBalance] = useState("");
  let [stakeAmount, setStakeAmount] = useState("");
  let [stakeReward, setStakeReward] = useState("");

  const stakeContract = useStakingContract(signer);
  const tokenContract = useTokenContract(signer);

// const [count,setcount]=useState(0);

// const Increment=()=>{
//   setcount(count+1);
// }
// useEffect(() => {
//   const interval=setInterval(Increment, 1000);
//   return () => {
//    clearInterval(interval);
//   }
// }, []);
// // output 1:

// const increase=()=>{
//   setcount(count+1);
// }
// useEffect(() => {
//   const interval=setInterval(increase, 1000);
//   return () => {
//    clearInterval(interval);
//   }
// }, [count]);

// // output: continue increment;

// const incrementvalue=()=>{
//   setcount(prevalue+prevalue+1);
// }
// useEffect(() => {
//   const interval=setInterval(incrementvalue, 1000);
//   return () => {
//    clearInterval(interval);
//   }
// }, []);

// // output: continue increment

  const init = async () => {
    if (account) {
      try {
        setLoading(true);
        let {
          totalStakedTokenUser,
          totalWithdrawanTokenUser,
          totalUnStakedTokenUser,
          totalClaimedRewardTokenUser,
          stakeCount,
        } = await stakeContract.Stakers(account);

        let decimal = await tokenContract.decimals();
        let balance = await tokenContract.balanceOf(account);
        setTotalBalance(+formatUnits(balance.toString(), +decimal));

        // let testArray = [];
        let totalAmount = 0;
        let totalReward = 0;
        for (let i = 0; i < +stakeCount; i++) {
          let { plan, amount, reward, withdrawan, unstaked } =
            await stakeContract.stakersRecord(account, i);

          // -----creating a object to get values of upper function for futher functionality
          // let obj = {
          //   plan: +plan,
          //   amount: +formatUnits(amount.toString(), +decimal),
          //   reward: +formatUnits(reward.toString(), +decimal),
          //   withdraw: withdrawan,
          //   unstake: unstaked,
          // };

          // testArray.push(obj);
          totalAmount += +formatUnits(amount.toString(), +decimal);
          totalReward += +formatUnits(reward.toString(), +decimal);
        }
        setStakeAmount(totalAmount);
        setStakeReward(totalReward);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    init();
    console.log(totalBalance, "account balance");
    console.log(stakeAmount, "amount");
    console.log(stakeReward, "reward");
  }, [account]);

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
      <Loading loading={loading} />
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
              <Grid item xs={12} md={6}>
                <Box p={matches ? 4 : 2} bgcolor="#101010" borderRadius="17px">
                  <Box>
                    <Typography fontSize="20px">
                      Total Balance in Account:{" "}
                      <span style={{ fontSize: "25px", color: "#c31ae1" }}>
                        {totalBalance}
                      </span>
                    </Typography>

                    <Typography fontSize="20px">
                      Total Amount to stake:{" "}
                      <span style={{ fontSize: "25px", color: "#c31ae1" }}>
                        {stakeAmount}
                      </span>
                    </Typography>

                    <Typography fontSize="20px">
                      Total reward get:
                      <span style={{ fontSize: "25px", color: "#c31ae1" }}>
                        {stakeReward}
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Statistic;
