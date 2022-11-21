import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function GrandmotherFatherSideSelect({
  grandmotherFatherSide,
  mother,
  grandmotherFatherSideChange,
  father,
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={mother ? true : !mother && father ? true : false}
          checked={grandmotherFatherSide}
          onChange={grandmotherFatherSideChange}
        />
      }
      label={
        <Typography color="#BBB8B7">
          {mother
            ? "الجدة أم الأب محجوبة لوجود الأم"
            : !mother && father
            ? "الجدة أم الأب محجوبة لوجود الأب"
            : grandmotherFatherSide
            ? "الجدة أم الأب على قيد الحياة"
            : "الجدة أم الأب متوفيّة"}
        </Typography>
      }
    />
  );
}

export default GrandmotherFatherSideSelect;
