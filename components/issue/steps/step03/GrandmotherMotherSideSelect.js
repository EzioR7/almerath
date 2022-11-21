import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function GrandmotherMotherSideSelect({
  grandmotherMotherSide,
  mother,
  grandmotherMotherSideChange,
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={mother ? true : false}
          checked={grandmotherMotherSide}
          onChange={grandmotherMotherSideChange}
        />
      }
      label={
        <Typography color="#BBB8B7">
          {mother
            ? "الجدة أم الأم محجوبة لوجود الأم"
            : grandmotherMotherSide
            ? "الجدة أم الأم حيّة"
            : "الجدة أم الأم متوفيّة"}
        </Typography>
      }
    />
  );
}

export default GrandmotherMotherSideSelect;
