function filter(music, lowerBand = 40, upperBand = 1000) {
  let result = [];

  for (let i = 0; i < music.length; i++) {
    if (typeof music[i] !== "number") {
      return "Error file corrupted";
    } else if (music[i] < lowerBand) {
      result.push(lowerBand);
    } else if (music[i] > upperBand) {
      result.push(upperBand);
    } else {
      result.push(music[i]);
    }
  }
  return result;
}

module.exports = filter;
