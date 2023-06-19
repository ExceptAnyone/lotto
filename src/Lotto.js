const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO } = require("./lib/constants");
const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.lottoNumbers(numbers) 
    this.#numbers = numbers; 
  }

  static generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN,
      LOTTO.MAX,
      LOTTO.COUNT,
    );

    return numbers.sort((a,b) => (a - b));
  }
  
  static draw(lotto) { //몇개 맞췄는지 판별
    const {numbers, winNumbers, bonusNumber} = lotto ;
    let result = 0 ;

    winNumbers.forEach((number) => numbers.includes(number) && (result +=1));
    
    // result === 5 && numbers.includes(bonusNumber) && (result = "BONUS");

    return result;
    };
  

  static purchase(amount) { //amount는 구입 금액
    const TOTAL = amount / LOTTO.PRICE;

    return Array(TOTAL)                                
    .fill("lotto")                          
    .map(()=> new Lotto(this.generateNumbers())); 
  }                                                

  get numbers(){     //get을 쓴 목작 : private 메소드에 접근 가능하게 하는 용도
    return this.#numbers;
  }
  
}
 


module.exports = Lotto;
