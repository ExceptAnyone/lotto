const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO } = require("./lib/constants");
const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.lottoNumbers(numbers) // this.validate(numbers)와 뭐가 다른거지?
    this.#numbers = numbers;
  }

  static generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN,
      LOTTO.MAX,
      LOTTO.COUNT,
    );

    return numbers;
  }
  

  static purchase(amount) {
    const TOTAL = amount / LOTTO.PRICE;

    return Array(TOTAL)                                   //여기부터 코드 이해 x
    .fill("lotto")
    .map(()=> new Lotto(this.generateNumbers()));
  }

  get numbers(){
    return this.#numbers;
  }
}
 


module.exports = Lotto;
