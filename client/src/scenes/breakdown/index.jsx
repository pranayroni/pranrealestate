import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BreakdownChart from "../../components/BreakdownChart";
const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BReAKDOWN" subtitle="Breakdown of Sales by Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
