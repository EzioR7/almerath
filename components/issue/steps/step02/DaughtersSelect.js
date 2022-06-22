/* Daughters Select */
import { TextField } from '@mui/material'

function DaughtersSelect({ daughters, daughtersChange }) {

  const handleChange = (e) => {

    // Check if sons Input is not empty
    let daughtersInput = e.target.value
    daughtersInput >= 0 && (daughtersInput != (undefined || "")) ? daughtersChange(sonsInput) : null

   }

  return (
    <TextField
      value={daughters} 
      label="البنات" 
      variant="filled" 
      type="number" 
      onChange={handleChange}
      InputProps={{ inputProps: { min: 0, max: 20 } }}
      fullWidth 
    />
  )
}

export default DaughtersSelect