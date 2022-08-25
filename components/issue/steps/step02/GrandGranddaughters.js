/* GrandGranddaughters Select */
import { TextField } from '@mui/material'

function GrandGranddaughters({ grandGranddaughters, sons, granddaughters, grandsons, grandGranddaughtersChange }) {

  const handleChange = (e) => {

    // Check if sons Input is not empty
    let grandGranddaughtersInput = e.target.value
    grandGranddaughtersInput >= 0 && (grandGranddaughtersInput != (undefined || "")) ? grandGranddaughtersChange(grandGranddaughtersInput) : null

  }

  return (
    <TextField
      value={grandGranddaughters} 
      label="بنات أبناء الأبناء" 
      variant="filled" 
      type="number" 
      onChange={handleChange}
      disabled={sons > 0 || grandsons > 0 || ((sons == 0 || sons == '') && daughters >= 2 && grandGrandsons == 0) ? true : false } 
      helperText={sons > 0 ? 'بنات أبناء الأبناء محجوبون لوجود الأبناء' : grandsons > 0 ? 'بنات أبناء الأبناء محجوبون لوجود أبناء الأبناء' : null}
      InputProps={{ inputProps: { max: 20 } }} 
      fullWidth
    />
  )
}

export default GrandGranddaughters