import React from "react";
import { Box, FormLabel, Slider } from "@mui/material";

function WifesSelect({ wifes, wifesChange }) {
  return (
    <Box sx={{ width: 300 }}>
      <FormLabel sx={{ py: "1.5rem" }}>الزوجات: {wifes}</FormLabel>
      <Slider
        aria-label="إختيار الزوجات"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={4}
        onChange={wifesChange}
        sx={{ mr: 4 }}
      />
    </Box>
  );
}

export default WifesSelect;
