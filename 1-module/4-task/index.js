function checkSpam(str) {
  if (!(typeof str === "string")) return false;

  str = str.toLowerCase();

  return str.includes("1xbet") || str.includes("xxx");
}
