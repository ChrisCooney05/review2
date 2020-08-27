function filter(music, lowerBand = 40, upperBand = 1000) {
  return `${music} ${lowerBand} ${upperBand}`;
}

module.exports = filter;
