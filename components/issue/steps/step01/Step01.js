import { useState } from 'react'
import { Grid } from '@mui/material'
import { GenderSelect,AmountSelect, CreedSelect } from './index'
import NextStepButton from '../../NextStepButton'
import { useNextStep } from 'context/Steps'
import { useUpdateIssue } from 'context/Issue'

function Step01() {

  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue()

  // Use next step context
  const goNextStep = useNextStep()

  // Hold state of gender radio
  const [gender, setGender] = useState({
    value: '',
    error: false
  })

  // Hold state of amount TextField
  const [amount, setAmount] = useState({
    value: '',
    error: false,
  })

  //Hold state of Creed Select
  const [creed, setCreed] = useState({
    value: '',
    error: false
  })

  const genderChange = (data) => {
    setGender(data)
  }

  const amountChange = (data) => {
    setAmount(data)
  }

  const creedChange = (data) => {
    setCreed(data)
  }

  const nextStep = () => {

    // Check For Required Gender Radio 
    gender.value === '' ? setGender((prev) => {
      return({...prev, error: true})
    }) : null

    // Check For Required Amount TextField 
    amount.value === '' || amount.value <= 0 ? setAmount((prev) => {
      return({...prev, error: true})
    }) : null

    // Check For Required Creed Select 
    creed.value === '' ? setCreed((prev) => {
      return({...prev, error: true})
    }) : null

    // Validate
    if (!gender.error && !amount.error && !creed.error && gender.value != '' && amount.value != '' && creed.value != '') {
      
      const data = {
        gender: gender.value,
        amount: parseFloat(amount.value),
        creed: creed.value
      }
      // Update The General State in the Context
      updateIssue(data)

      // Move To Next Step
      goNextStep()
    }
    
  }

  return (
    <>
      <Grid container alignItems="center" rowSpacing={2} mt="3">
        <Grid item md={4} sm={12}>
          <GenderSelect gender={gender} genderChange={genderChange} />
        </Grid>
        <Grid item md={4} sm={12}>
          <AmountSelect amount={amount} amountChange={amountChange}  />
        </Grid>
        <Grid item md={4} sm={12}>
          <CreedSelect creed={creed} creedChange={creedChange}  />
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  )
}

export default Step01