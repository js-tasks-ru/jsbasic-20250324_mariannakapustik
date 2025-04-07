function getMinMax(str) {
  str = str.split(" ").filter((item) => isFinite(item));

  let result = {};
  result.min = Math.min(...str);
  result.max = Math.max(...str);

  return result;
}
