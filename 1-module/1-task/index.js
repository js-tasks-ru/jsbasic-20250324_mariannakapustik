function factorial(n) {
  if (!(typeof n === "number")) return;

  if (n === 0 || n === 1) return (n = 1);

  let i = n;

  while (i > 1) {
    n = n * (i - 1);
    i--;
  }

  return n;
}
