import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function GrandfatherSelect({ father, grandfather, grandfatherChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={father}
          checked={grandfather}
          onChange={grandfatherChange}
        />
      }
      label={
        <Typography color="#BBB8B7">
          {father
            ? "الجد محجوب لوجود الأب"
            : grandfather
            ? "الجد على قيد الحياة"
            : "الجد متوفى"}
        </Typography>
      }
    />
  );
}

export default GrandfatherSelect;
