function filter(music, lowerBand = 40, upperBand = 1000) {
  if (music < lowerBand) {
    return lowerBand;
  } else {
    return upperBand;
  }
}

module.exports = filter;
