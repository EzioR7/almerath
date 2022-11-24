/* Brothers Select */
import { TextField } from "@mui/material";

function BrothersSelect({ brothers, brothersChange }) {
  const handleChange = (e) => {
    // Check if sons Input is not empty
    let brothersInput = e.target.value;
    brothersInput >= 0 && brothersInput != (undefined || "")
      ? brothersChange(brothersInput)
      : null;
  };
  return (
    <TextField
      value={brothers}
      label="الإخوة الأشقاء"
      variant="filled"
      type="number"
      //disabled={grandsons > 0 || grandGrandsons > 0 || granddaughters > 0 ? true : false}
      onChange={handleChange}
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  );
}

export default BrothersSelect;
