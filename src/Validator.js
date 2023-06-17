const { ERROR_CODE, CustomError } = require("./Error");

class Validator {
    static amount(callback){
        return (amount) => {
            if (amount.trim().length === 0 || isNaN(amount -0)) { //-0을 해주는 이유?
                throw new CustomError(ERROR_CODE.NOT_NUMBER);
            }

            if (amount % 1000 !== 0){
                throw new CustomError(ERROR_CODE.WRONG_AMOUNT);
            }

            callback(amount); //여기 callback이 의미하는 것?
        }
    }

    static lottoNumbers(lottoNumbers){
        if (lottoNumbers.length !==6){ //여기엔 return과 마지막 줄에 callback 함수가 없음 이유는?
            throw new CustomError(ERROR_CODE.WRONG_COUNT);
        }

        if (lottoNumbers.some((number)=> number <1 || number > 45)){
            throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
        }

        if (lottoNumbers.length !== new Set(lottoNumbers).size){ //length가 아닌 size를 쓰는 이유 // set으로 중복된 요소 제거
            throw new CustomError(ERROR_CODE.DUPLICATED);
        }
    }

    static winNumber(callback) {
        return (winNumbers) => {
            if (winNumbers.split(",").length === 1) {
                throw new CustomError(ERROR_CODE.WRONG_FORMAT);
            }

            if (winNumbers.split(",").length !== 6) {
                throw new CustomError(ERROR_CODE.WRONG_COUNT);
            }

            if (new Set(winNumbers.split(",").size !== 6)) {
                throw new CustomError(ERROR_CODE.DUPLICATED);
            }

            if (winNumbers.split(",").some((number) => number < 1 || number > 45)) {
                throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
            }

            callback(winNumbers);
        }
    }

    static bonusNumber(callback) {
        return (bonusNumber) => {
            if (bonusNumber.trim().length ===0 || isNaN(bonusNumber - 0)) {
                throw new CustomError(ERROR_CODE.NOT_NUMBER);
            }

            if (bonusNumber < 1 || bonusNumber > 45) {
                throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
            }

            if (bonusNumber.includes(parseInt(bonusNumber))) {
                throw new CustomError(ERROR_CODE.DUPLICATED);
            }

            callback(bonusNumber);
        }
    }
}

module.exports = Validator;