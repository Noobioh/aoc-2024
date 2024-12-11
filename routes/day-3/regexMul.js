export function regexMul(str) {
  const regex = /mul\(\d+,\d+\)/g;
  const matches = str.match(regex);
  console.log(matches);

  if (matches) {
    matches.forEach((match) => {
      const [a, b] = match.slice(4, -1).split(",").map(Number);
      const result = a * b;
      sum = str.replace(match, result);
    });
  }

  return sum;
}

export default regexMul;
