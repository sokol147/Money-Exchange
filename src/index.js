// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const result = {};

  if(currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } else {
    const monetDenomination = [50, 25, 10, 5, 1];
    const monetName = ["H", "Q", "D", "N", "P"];

    for(let i = 0, len = monetDenomination.length; i < len; i++){
      if(currency >= monetDenomination[i]){
        let count = 0;
        while(count * monetDenomination[i] <= currency - monetDenomination[i]){
            count++;
        }
        currency -= monetDenomination[i] * count;
        result[monetName[i]] = count;
      }
    }
  }

  return result;
}