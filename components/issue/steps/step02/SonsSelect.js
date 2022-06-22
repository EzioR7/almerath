import { useState } from 'react'
import { useUpdateIssue, useIssue } from 'context/Issue'
import { TextField } from '@mui/material'

function SonsSelect() {

   // Using the custom Hook to update the Issue general state
   const updateIssue = useUpdateIssue()
   const issueData = useIssue()

   const [sons, setSons] = useState(0)

   const isDisabled = () => {

    let disabled = false

    // Set up when sons select should be disabled
    issueData.inherits.league.find((item) => {
      return item.title == 'أبناء الأبناء' || item.title == 'أبناء أبناء الأبناء' || item.title == 'بنات الأبناء' 
    }) == undefined ? disabled = false : disabled = true

    issueData.inherits.fard.find((item) => {
      return item.title == 'بنات الأبناء'
    }) == undefined ? disabled = false : disabled = true
  
    return disabled

   }
   
   const sonsChange = (e) => {

    // Check if sons Input is not empty
    let sonsInput = e.target.value
    sonsInput > 0 && sonsInput != (undefined || "") ? setSons(sonsInput) : null

    // Check if the user delete sonsSelect
    if (sonsInput == "") {
      const data = {
        inherits: {
          league: issueData.inherits.league.filter((inherit) => {
            return inherit.title != 'الأبناء'
          })
        },
        hasChild: false
      }
    }
    
    // Check if sons is greater then 0 so add the inherits
    if (sons > 0) {
      const data = {
        inherits: {
          league: [
            {
              title: 'الأبناء',
              count: sons
            }
          ]
        },
        hasChild: true
      }

      updateIssue(data)
    }
    
   }

  return (
    <TextField 
      value={sons} 
      label="الأبناء" 
      variant="filled" 
      type="number"
      disabled={isDisabled()}  
      onChange={sonsChange}
      InputProps={{ inputProps: { min: 0, max: 20 } }}
      fullWidth
    />
  )
}

export default SonsSelect