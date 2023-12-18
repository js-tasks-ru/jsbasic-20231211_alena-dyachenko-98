function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    if (i === 0) {
      // eslint-disable-next-line no-unused-expressions
      i === 1;
    }
    result *= i;
  }
  return result;
}
