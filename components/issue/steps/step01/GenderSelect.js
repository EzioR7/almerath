import { FormControl, FormLabel, RadioGroup, Radio, Typography, FormControlLabel, FormHelperText} from '@mui/material'
import { MaleTwoTone, FemaleTwoTone } from '@mui/icons-material'

function GenderSelect({gender, genderChange}) {
  return (
    <FormControl error={gender.error} component="fieldset">
      <FormLabel component="legend">جنس صاحب الإرث</FormLabel>
      <RadioGroup 
        row aria-label="جنس صاحب الإرث" 
        name="gender" 
        value={gender.value}
        required 
        onChange={(e) => {genderChange({value: e.target.value, error: false})}}>
        <FormControlLabel value="male" control={<Radio />} label={<Typography fontSize="1.2rem" fontWeight="bold" color="#fffe"><MaleTwoTone fontSize="inherit" /> ذكر</Typography>} />
        <FormControlLabel value="female" control={<Radio />} label={<Typography fontSize="1.2rem" fontWeight="bold" color="#fffe"><FemaleTwoTone fontSize="inherit" /> إنثى</Typography>} />
      </RadioGroup>
      <FormHelperText>{gender.error ? 'يرجى إختيار جنس صاحب الإرث' : null}</FormHelperText>
    </FormControl>
  )
}

export default GenderSelect