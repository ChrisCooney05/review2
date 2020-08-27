function filter(music, lowerBand = 40, upperBand = 1000) {
  let result = [];
  for (let i = 0; i < music.length; i++) {
    if (music[i] < lowerBand) {
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
