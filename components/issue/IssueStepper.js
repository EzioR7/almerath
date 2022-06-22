import { Stepper, Typography, Step, StepLabel, StepContent, } from '@mui/material'
import { Step01, Step02 } from 'components/issue/steps/index'
import { useStep } from 'context/Steps'

function IssueStepper() {

  // Get Active Step
  const step = useStep()

  const stepDetails = [
    {
      title: 'عن صاحب الإرث',
      content: <Step01 />
    },
    {
      title: 'إختيار الأولاد',
      content: <Step02 />
    },
  ]

  return (
    <>
      <Stepper activeStep={step} orientation="vertical">
        {
          stepDetails.map((step) => {
            return(
              <Step key={step.title}>
                <StepLabel>
                  <Typography 
                    variant="h3" 
                    sx={{fontSize: "1.2rem"}} 
                  >
                    {step.title}
                  </Typography>
                </StepLabel>
                <StepContent>
                  {step.content}
                </StepContent>
              </Step>
            )
          })
        }
      </Stepper>
    </>
  )
}

export default IssueStepper