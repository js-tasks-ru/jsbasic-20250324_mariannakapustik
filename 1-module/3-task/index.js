function ucFirst(str) {
  if (!(typeof str === "string") || str === "") return str;

  let ucFirstChar = str[0].toUpperCase();
  str = ucFirstChar + str.slice(1);

  return str;
}
