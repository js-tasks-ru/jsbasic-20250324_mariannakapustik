function camelize(str) {
  str = str.split("");

  let hyphenIndex;
  let enlargedLetter;

  for (let i = 0; ; i = hyphenIndex + 1) {
    hyphenIndex = str.indexOf("-", i);

    if (hyphenIndex === -1) break;

    enlargedLetter = str[hyphenIndex + 1].toUpperCase();

    str.splice(hyphenIndex, 2, enlargedLetter);
  }

  return str.join("");
}
