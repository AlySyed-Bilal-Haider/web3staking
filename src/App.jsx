import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import RecordTable from "./components/RecordTable/Tabel";
import Statistic from "./components/Statistics/Statistics";
import Tier from "./components/Tiers/Tier";
import Swiper from "./components/Swiper/Swiper";

import NetworkChange from "./networkSwitch";
const web3 = new Web3(
  Web3.givenProvider
    ? Web3.givenProvider
    : "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 97) {
        setOpen(true);
      }
    };
    chain();
  }, []);

  return (
    <>
      <NetworkChange open={open} setOpen={setOpen} />
      <Header />
      <Tier />
      <Statistic />
      <Swiper />
      <RecordTable />
      <Footer />
    </>
  );
}

export default App;
