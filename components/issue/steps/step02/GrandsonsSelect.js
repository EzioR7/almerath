/* Grandsons Select */
import { TextField } from '@mui/material'

function GrandsonsSelect({ grandsons, sons, grandGrandsons, grandsonsChange }) {

  const handleChange = (e) => {

    // Check if sons Input is not empty
    let grandsonsInput = e.target.value
    grandsonsInput >= 0 && (grandsonsInput != (undefined || "")) ? grandsonsChange(grandsonsInput) : null

   }

  return (
    <TextField
      value={grandsons} 
      label="أبناء الأبناء" 
      variant="filled" 
      type="number"
      disabled={sons > 0 || grandGrandsons > 0 ? true : false} 
      onChange={handleChange} 
      helperText={sons > 0 ? 'أبناء الأبناء محجوبون لوجود الأبناء' : null}
      InputProps={{ inputProps: { max: 20 } }} 
      fullWidth
    />
  )
}

export default GrandsonsSelect