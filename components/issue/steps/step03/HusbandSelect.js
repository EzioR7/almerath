import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function HusbandSelect({ husband, husbandChange }) {
  return (
    <FormControlLabel
      control={<Checkbox checked={husband} onChange={husbandChange} />}
      label={
        <Typography color="#BBB8B7">
          {husband ? "الزوج على قيد الحياة" : "الزوج متوفى"}
        </Typography>
      }
    />
  );
}

export default HusbandSelect;
