function checkSpam(str) {
  if (!(typeof str === "string")) return false;

  str = strToLowerCase(str);

  if (str.includes("1xbet") || str.includes("xxx")) return true;

  return false;
}

function strToLowerCase(str) {
  str = str.toLowerCase();
  return str;
}
