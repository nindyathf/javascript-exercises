const convertToCelsius = function(suhu) {
  return suhuCelcius = Math.round((suhu - 32) * (5/9))
};

const convertToFahrenheit = function(suhu) {
  return suhuFahrenheit = Math.round(suhu * (9/5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
