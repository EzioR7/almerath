import { Box, Button } from '@mui/material'
import { ArrowDownward } from '@mui/icons-material'

function NextStepButton({ nextStep }) {
  return (
    <Box textAlign='center' sx={{ mb: 2}}>
      <div>
        <Button
          variant="outlined"
          onClick={nextStep}
          sx={{ mt: 6, mr: 1 }}
          size="large"
        >
          <ArrowDownward />
          الخطوة التالية
        </Button>
      </div>
    </Box>
  )
}

export default NextStepButton