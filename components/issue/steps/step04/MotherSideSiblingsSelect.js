/* MotherSide Siblings Select */
import { TextField } from "@mui/material";

function MotherSideSiblingsSelect({
  motherSideSiblings,
  motherSideSiblingsChange,
  hasGrandfather,
  hasChild,
}) {
  const handleChange = (e) => {
    // Check if MotherSideSiblings Input is not empty
    let motherSideSiblingsInput = e.target.value;
    motherSideSiblingsInput >= 0 && motherSideSiblingsInput != (undefined || "")
      ? motherSideSiblingsChange(motherSideSiblingsInput)
      : null;
  };
  return (
    <TextField
      value={motherSideSiblings}
      label="الأخوة لأم"
      variant="filled"
      type="number"
      disabled={hasGrandfather || hasChild ? true : false}
      onChange={handleChange}
      helperText={
        hasGrandfather
          ? "الإخوة لأم محجوبون لوجود الجد."
          : hasChild
          ? "الإخوة لأم محجوبون لوجود الفرع الوارث المؤنث."
          : null
      }
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  );
}

export default MotherSideSiblingsSelect;
