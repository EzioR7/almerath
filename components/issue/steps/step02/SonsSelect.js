/* Sons Select */
import { TextField } from '@mui/material'

function SonsSelect({ sons, grandsons, grandGrandsons, granddaughters, sonsChange }) {

   const handleChange = (e) => {

    // Check if sons Input is not empty
    let sonsInput = e.target.value
    sonsInput >= 0 && (sonsInput != (undefined || "")) ? sonsChange(sonsInput) : null

   }

  return (
    <TextField 
      value={sons} 
      label="الأبناء" 
      variant="filled" 
      type="number"
      disabled={grandsons > 0 || grandGrandsons > 0 || granddaughters > 0 ? true : false}  
      onChange={handleChange}
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  )
}

export default SonsSelect