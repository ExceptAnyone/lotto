const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO } = require("./lib/constants");
const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.lottoNumbers(numbers) // this.validate(numbers)와 뭐가 다른거지?
    this.#numbers = numbers; //굳이 숫자라고 지정해주는 이유??
  }

  static generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN,
      LOTTO.MAX,
      LOTTO.COUNT,
    );

    return numbers;
  }
  

  static purchase(amount) { //amount는 구입 금액
    const TOTAL = amount / LOTTO.PRICE;

    return Array(TOTAL)                                   //여기부터 코드 이해 x
    .fill("lotto")                           //만약 TOTAL이 4라면 결국 [lotto,lotto,lotto,lotto] 이거 아님?
    .map(()=> new Lotto(this.generateNumbers())); //그럼 여기다가 map해서 랜덤 숫자 뽑으면 length가 4짜리인 배열에 랜덤 숫자 부여하는거 아닌가 
  }                                                 //예를들어 [2,4,18,34] 이런식으로. 아닌가 랜덤으로 부여받은 숫자가 6개인 배열이 4개 생기는건가?

  get numbers(){     //get을 쓴 목적?? get에 대한 정확한 개념이 부족한듯
    return this.#numbers;
  }
}
 


module.exports = Lotto;
