/* FatherSideBrothers Select */
import { TextField } from "@mui/material";

function FatherSideBrothersSelect({
  fatherSideBrothers,
  fatherSideBrothersChange,
  brothers,
  sisters,
  hasChild,
}) {
  const handleChange = (e) => {
    // Check if FatherSideBrothers Input is not empty
    let fatherSideBrothersInput = e.target.value;
    fatherSideBrothersInput >= 0 && fatherSideBrothersInput != (undefined || "")
      ? fatherSideBrothersChange(fatherSideBrothersInput)
      : null;
  };

  return (
    <TextField
      value={fatherSideBrothers}
      label="الأخوة لأب"
      variant="filled"
      type="number"
      disabled={brothers > 0 || (hasChild && sisters > 0) ? true : false}
      onChange={handleChange}
      helperText={
        brothers > 0
          ? "الإخوة لأب محجوبون لوجود الإخوة الأشقاء."
          : hasChild && sisters > 0
          ? "الأخوة لأب محجوبون لوجود الأخت الشقيقة التي صارت عصبة  مع الفرع الوارث المؤنث."
          : null
      }
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  );
}

export default FatherSideBrothersSelect;
