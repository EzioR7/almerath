/* GrandGrandsons Select */
import { TextField } from '@mui/material'

function GrandGrandsonsSelect({ grandGrandsons, sons, grandsons, grandGrandsonsChange }) {

  const handleChange = (e) => {

    // Check if sons Input is not empty
    let grandGrandsonsInput = e.target.value
    grandGrandsonsInput >= 0 && (grandGrandsonsInput != (undefined || "")) ? grandGrandsonsChange(grandGrandsonsInput) : null

   }

  return (
    <TextField
      value={grandGrandsons} 
      label="أبناء أبناء الأبناء" 
      variant="filled" 
      type="number" 
      onChange={handleChange}
      disabled={sons > 0 || grandsons > 0 ? true : false } 
      helperText={sons > 0 ? 'أبناء أبناء الأبناء محجوبون لوجود الأبناء' : grandsons > 0 ? 'أبناء أبناء الأبناء محجوبون لوجود أبناء الأبناء' : null}
      InputProps={{ inputProps: { max: 20 } }} 
      fullWidth
    />
  )
}

export default GrandGrandsonsSelect