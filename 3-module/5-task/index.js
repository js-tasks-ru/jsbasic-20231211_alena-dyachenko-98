function getMinMax(str) {
  let arr = str.split(' ').filter((word) => !isNaN(word));
  let result = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
  return result;
}
