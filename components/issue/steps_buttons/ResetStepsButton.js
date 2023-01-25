import { Box, Button } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import { useResetStep } from "context/Steps";
import { useUpdateIssue } from "context/Issue";

function ResetStepsButton() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();

  // Use next step context
  const goResetSteps = useResetStep();

  // Reset Handler
  const resetSteps = () => {
    const data = {
      gender: "",
      amount: 0,
      creed: "",
      issueType: "",
      allStocks: 0,
      fardInherits: [],
      leagueInherits: [],
      note: "",
      hasSons: false,
      hasChild: false,
      hasPartner: false,
      hasGrandfather: false,
    };
    // Reset Issue Context
    updateIssue(data);

    // Reset Steps Context
    goResetSteps();
  };

  return (
    <Box textAlign="center" sx={{ mb: 2 }}>
      <div>
        <Button
          variant="outlined"
          onClick={resetSteps}
          sx={{ mt: 6, mr: 1 }}
          size="large"
        >
          <RestartAlt />
          مسألة جديدة
        </Button>
      </div>
    </Box>
  );
}

export default ResetStepsButton;
