function truncate(str, maxlength) {
  if (!(typeof str === "string")) return;

  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + "…";
    return str;
  }

  return str;
}
