import React from "react";
import { useIssue } from "context/Issue";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

function MotherSelect({
  mother,
  grandmotherFatherSide,
  grandmotherMotherSide,
  motherChange,
  hasSiblings,
  hasSiblingsChange,
}) {
  const issueData = useIssue();
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            disabled={
              grandmotherFatherSide || grandmotherMotherSide ? true : false
            }
            checked={mother}
            onChange={motherChange}
          />
        }
        label={
          <Typography color="#BBB8B7">
            {mother ? "الأم على قيد الحياة" : "الأم متوفيّة"}
          </Typography>
        }
      />
      {mother && !issueData.hasChild ? (
        <FormControlLabel
          control={
            <Checkbox checked={hasSiblings} onChange={hasSiblingsChange} />
          }
          label={
            <Typography color="#BBB8B7">
              {hasSiblings
                ? "يوجد إثنين فأكثر من الإخوة سواء أشقاء أو لأب أو لأم للمتوفى"
                : "لا يوجد إثنين فأكثر من الإخوة سواء أشقاء أو لأب أو لأم للمتوفى"}
            </Typography>
          }
        />
      ) : null}
    </>
  );
}

export default MotherSelect;
