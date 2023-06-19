const { ERROR_CODE, CustomError } = require("./Error");

class Validator {
    static amount(callback){
        return (amount) => {
            if (amount.trim().length === 0 || isNaN(Number(amount))) { //꼼수: isNan(amount-0)-0을 해주면 문자열이 숫자로 반환
                throw new CustomError(ERROR_CODE.NOT_NUMBER);
            }

            if (amount % 1000 !== 0){
                throw new CustomError(ERROR_CODE.WRONG_AMOUNT);
            }

            callback(amount); 
        }
    }

    static lottoNumbers(lottoNumbers){
        if (lottoNumbers.length !==6){ 
            throw new CustomError(ERROR_CODE.WRONG_COUNT);
        }

        if (lottoNumbers.some((number)=> number <1 || number > 45)){
            throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
        }

        if (lottoNumbers.length !== new Set(lottoNumbers).size){ 
            throw new CustomError(ERROR_CODE.DUPLICATED);
        }
    }

    static winNumbers(callback) {
        return (winNumbers) => {
            if (winNumbers.split(",").length === 1) {
                throw new CustomError(ERROR_CODE.WRONG_FORMAT);
            }

            if (winNumbers.split(",").length !== 6) {
                throw new CustomError(ERROR_CODE.WRONG_COUNT);
            }

            if (new Set(winNumbers.split(",")).size !== 6) {
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