module.exports = function getZerosCount(number) {

  var zerosCount = 0;

  for ( var i = 5; number / i >= 1; i *= 5 ) {
    zerosCount += ~~(number / i);
  }
  return zerosCount;
}
