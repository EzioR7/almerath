/* Granddaughters Select */
import { TextField } from '@mui/material'

function GranddaughtersSelect({ granddaughters, sons, daughters, grandsons, granddaughtersChange }) {

  const handleChange = (e) => {

    // Check if sons Input is not empty
    let granddaughtersInput = e.target.value
    granddaughtersInput >= 0 && (granddaughtersInput != (undefined || "")) ? granddaughtersChange(granddaughtersInput) : null

   }

  return (
    <TextField
      value={granddaughters} 
      label="بنات الإبن" 
      variant="filled" 
      type="number" 
      onChange={handleChange} 
      helperText={sons > 0 ? 'بنات الإبن محجوبون لوجود الأبناء' : sons == 0 && daughters >= 2 && grandsons == 0  ? 'بنات الأبناء محجوبون لإستيفاء حظ الثلثين للإناث' : null}
      disabled={sons > 0 || ((sons == 0 || sons == '') && daughters >= 2 && grandsons == 0) ? true : false} 
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  )
}

export default GranddaughtersSelect