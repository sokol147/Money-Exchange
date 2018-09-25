// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if(currency <= 0){
    return {};
  } else if(currency <= 10000){
    let monetDenomination = [50, 25, 10, 5, 1];
    let monetName = ["H", "Q", "D", "N", "P"];
    let result = {};

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

    return result;
  } else {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
}