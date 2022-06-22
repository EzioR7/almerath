/* Children Select */
import { useState } from 'react'
import { useUpdateIssue, useIssue } from 'context/Issue'
import { useNextStep } from 'context/Steps'
import { Grid, FormLabel } from '@mui/material'
import { SonsSelect, DaughtersSelect } from './index'

function Step02() {

  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue()
  const issueData = useIssue()

  // Use next step context
  const goNextStep = useNextStep()

  // State
  const [sons, setSons] = useState(0)
  const [daughters, setDaughters] = useState(0)
  const [grandsons, setGrandsons] = useState(0)
  const [granddaughters, setGranddaughters] = useState(0)
  const [grandGrandsons, setGrandGrandsons] = useState(0)

  // State Change from children
  const sonsChange = (val) => {
    setSons(val)
  }

  const daughtersChange = (val) => {
    setDaughters(val)
  }


  return (
    <>
      <FormLabel sx={{py: '1.5rem'}}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={2} sm={3} xs={10} item>
          <SonsSelect sons={sons} grandsons={grandsons} grandGrandsons={grandGrandsons} granddaughters={granddaughters} sonsChange={sonsChange} />
        </Grid>
        <Grid md={2} sm={3} xs={10} item>
          <DaughtersSelect daughters={daughters} daughtersChange={daughtersChange} />
        </Grid>
      </Grid>
    </>
  )
}

export default Step02