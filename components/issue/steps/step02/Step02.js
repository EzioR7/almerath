/* Children Select */
import { useUpdateIssue, useIssue } from 'context/Issue'
import { useNextStep } from 'context/Steps'
import { Grid, FormLabel } from '@mui/material'
import { SonsSelect } from './index'

function Step02() {

  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue()
  const issueData = useIssue()

  // Use next step context
  const goNextStep = useNextStep()

  return (
    <>
      <FormLabel sx={{py: '1.5rem'}}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={2} sm={3} xs={10} item>
          <SonsSelect />
        </Grid>
      </Grid>
    </>
  )
}

export default Step02