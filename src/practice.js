const { purchase } = require("./Lotto");

class Lotto {
    #numbers;
    constructor(numbers) {
        Validator.lottoNumbers(numbers) // this.validate(numbers)와 뭐가 다른거지?
        this.#numbers = numbers;
}

static purchase() {  

const TOTAL = amount / 1000

    return Array(TOTAL)                                   //여기부터 코드 이해 x
    .fill("lotto")
    .map(()=> new Lotto(this.generateNumbers()));
  }
}
console.log(purchase);