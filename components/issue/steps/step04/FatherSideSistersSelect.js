/* FatherSide Sisters Select */
import { TextField } from "@mui/material";

function FatherSideSistersSelect({
  fatherSideSisters,
  fatherSideSistersChange,
  brothers,
  sisters,
  fatherSideBrothers,
  hasChild,
}) {
  const handleChange = (e) => {
    // Check if sons Input is not empty
    let fatherSideSistersInput = e.target.value;
    fatherSideSistersInput >= 0 && fatherSideSistersInput != (undefined || "")
      ? fatherSideSistersChange(fatherSideSistersInput)
      : null;
  };

  return (
    <TextField
      value={fatherSideSisters}
      label="الأخوات لأب"
      variant="filled"
      type="number"
      onChange={handleChange}
      helperText={
        brothers > 0
          ? "الأخوات لأب محجوبات لوجود الأخوة الأشقاء"
          : brothers == 0 && sisters >= 2 && fatherSideBrothers == 0
          ? "الأخوات لأب محجوبات لإستيفاء حظ الثلثين للإناث"
          : hasChild && sisters > 0
          ? "الأخوات لأب محجوبات لوجود الأخت الشقيقة التي صارت عصبة  مع الفرع الوارث المؤنث."
          : null
      }
      disabled={
        brothers > 0 ||
        ((brothers == 0 || brothers == "") &&
          sisters >= 2 &&
          fatherSideBrothers == 0) ||
        (hasChild && sisters > 0)
          ? true
          : false
      }
      InputProps={{ inputProps: { max: 20 } }}
      fullWidth
    />
  );
}

export default FatherSideSistersSelect;
