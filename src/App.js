const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");
const User =  require('./User');
const Lotto = require('/.Lotto');

class App {
    constructor(){
        this.user = new User();  // constructor를 설정해주는 이유가 뭐지... 추상화하려고 new User를 한건가
    }

    play(){
        this.purchase();
    }

    exit(){
        MissionUtils.Console.close();
    }

    
    purchase() {
        this.user.readAmount(MESSAGE.AMOUNT, (amount) => {
            this.user.lottoList = Lotto.purchase(amount);
            this.printMessage("");     //빈 문자열을 인자로 준 이유?
            this.printPurchaseResult(); 
    });
  }

  printPurchaseResult() {
    this.printMessage(MESSAGE.PURCHASE(this.user.lottoList.length));
    this.user.lottoList.forEach((lotto)=> {
    this.printMessage(JSON.stringify(lotto.numbers).replaceAll(",", ", "));
      });
   }
  
   setWinNumber(){
    this.user.readWinNumbers(MESSAGE.WIN_NUMBERS, (winNumbers) => {
      Lotto.prototype.winNumbers = winNumbers.split(",").map(Number);
      this.printMessage("");
    })
   }

   setBonusNumber(){
    this.user.readBonusNumber(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      console.log(bonusNumber);
    })
   }

  printMessage(message) {
    MissionUtils.console.print(message);
    }
  }

const app = new App();
app.play();

module.exports = App;
