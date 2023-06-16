const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

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
    }


module.exports = User;