const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");
const Lotto = require("./Lotto");

class User {
    lottoList = [];
    readAmount(query, callback) {
        MissionUtils.Console.readLine(query, (amount) => {
            callback(amount);
        });
    }
    
    readWinNumbers(query, callback) {
        MissionUtils.Console.readLine(query,(winNumber) => {
            callback(winNumber);
        });
    }
    
    readBonusNumber(query, callback) {
        MissionUtils.Console.readLine(query, (bonusNumber) => {
            callback(bonusNumber);
        })
    }
    }


module.exports = User;