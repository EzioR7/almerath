import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'

function CreedSelect({ creed, creedChange }) {
  return (
    <FormControl error={creed.error} variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="creed">المذهب</InputLabel>
        <Select
          labelId="creed" 
          value={creed.value}
          onChange={(e) => {creedChange({ value: e.target.value, error: false })} }
        >
          <MenuItem value={'الحنفي'}>الحنفي</MenuItem>
          <MenuItem value={'الشافعي'}>الشافعي</MenuItem>
          <MenuItem value={'المالكي'}>المالكي</MenuItem>
        </Select>
      <FormHelperText>{creed.error ? 'يرجى إختيار المذهب' : null}</FormHelperText>
    </FormControl>
  )
}

export default CreedSelect