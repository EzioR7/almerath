/* Sisters Select */
import { TextField } from "@mui/material";

function SistersSelect({ sisters, sistersChange }) {
  const handleChange = (e) => {
    // Check if sons Input is not empty
    let sistersInput = e.target.value;
    sistersInput >= 0 && sistersInput != (undefined || "")
      ? sistersChange(sistersInput)
      : null;
  };

  return (
    <TextField
      value={sisters}
      label="الأخوات الشقيقات"
      variant="filled"
      type="number"
      onChange={handleChange}
      InputProps={{ inputProps: { min: 0, max: 20 } }}
      fullWidth
    />
  );
}

export default SistersSelect;
