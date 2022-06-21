import { Stepper, Typography, Step, StepLabel, StepContent, } from '@mui/material'
import Step01 from 'components/issue/steps/step01/Step01'
import { useStep } from 'context/Steps'

function IssueStepper() {

  // Get Active Step
  const step = useStep()

  return (
    <>
      <Stepper activeStep={step} orientation="vertical">
        <Step>
          <StepLabel>
            <Typography 
              variant="h3" 
              sx={{fontSize: "1.2rem"}} 
            >
              عن صاحب الإرث
            </Typography>
          </StepLabel>
          <StepContent>
            <Step01 />
          </StepContent>
        </Step>
      </Stepper>
    </>
  )
}

export default IssueStepper