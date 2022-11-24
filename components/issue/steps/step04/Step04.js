/* Siblings Select */
import { useState } from "react";
import { useUpdateIssue, useIssue } from "context/Issue";
import { useNextStep, useLastStep } from "context/Steps";
import { Grid, FormLabel } from "@mui/material";
import NextStepButton from "../../steps_buttons/NextStepButton";
import { BrothersSelect } from "./index";

function Step04() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();
  const issueData = useIssue();
  // Use next step context
  const goNextStep = useNextStep();

  // Use Last step context
  const goLastStep = useLastStep();

  // State
  const [brothers, setBrothers] = useState(0);

  // State Change from children
  const brothersChange = (val) => {
    setBrothers(val);
  };

  const nextStep = () => {};

  return (
    <>
      <FormLabel sx={{ py: "1.5rem" }}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <BrothersSelect brothers={brothers} brothersChange={brothersChange} />
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  );
}

export default Step04;
