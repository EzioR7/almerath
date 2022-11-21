import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function FatherSelect({ father, grandfather, fatherChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={grandfather}
          checked={father}
          onChange={fatherChange}
        />
      }
      label={
        <Typography color="#BBB8B7">
          {father ? "الأب على قيد الحياة" : "الأب متوفى"}
        </Typography>
      }
    />
  );
}

export default FatherSelect;
