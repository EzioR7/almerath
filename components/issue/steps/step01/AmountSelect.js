import { Box, TextField } from '@mui/material'
import { AttachMoneyTwoTone } from '@mui/icons-material'

function AmountSelect({ amount, amountChange}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        error={amount.error} 
        value={amount.value} 
        label="قيمة التركة" 
        variant="filled" 
        type="number" 
        onChange={(e) => {amountChange({ value: e.target.value, error: false})} }
        helperText={amount.error ? 'يرجى إدخال قيمة عددية للتركة' : null}
        InputProps={{ inputProps: { min: 0 } }} 
      />
      <AttachMoneyTwoTone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    </Box>
  )
}

export default AmountSelect