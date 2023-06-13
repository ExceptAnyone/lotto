const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

class User {
    readAmount(query, callback) {
        MissionUtils.Console.readLine(query, (amount) => {
            callback(amount);
        });
    }
}

module.exports = User;