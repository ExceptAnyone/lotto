const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");
const User =  require('./User');
const Lotto = require('./Lotto');

class App {
    constructor(){
        this.user = new User(); 
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
            this.printMessage("");   
            this.printPurchaseResult(); 
            this.setWinNumber();

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
      this.setBonusNumber();
    })
   }

   setBonusNumber(){
    this.user.readBonusNumber(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      Lotto.prototype.bonusNumber = bonusNumber;
      this.printMessage("");
      this.draw();
      })
    }

    draw() {
      const resultList = this.user.lottoList.map(Lotto.draw);
      console.log(resultList);
      this.exit();
    }
   

  printMessage(message) {
    MissionUtils.Console.print(message);
    }
  }

const app = new App();
app.play();

module.exports = App;
