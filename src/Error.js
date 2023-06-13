const ERROR_CODE = Object.freeze({
    NOT_NUMBER: "NOT_NUMBER",
    WRONG_AMOUNT: "WRONG_AMOUNT",
  });

const ERROR_MESSAGE = Object.freeze({
    NOT_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
    WRONG_AMOUNT: "[ERROR] 천원 단위로 입력해 주세요.",
  });

  const createParams = (code, value) =>
  [ERROR_MESSAGE[code], { cause: { code, value } }];     //이게 무엇을 위한 코드인지 이해 x

  class CustomError extends Error {
    constructor(code, value = null) {          //Error 라는 클래스가 없는데 어떻게 extends Error가 나오는거지??
        super(...createParams(code, value));    //super에 ...을 붙이는것은 무엇?
    }
  }

  module.exports = { CustomError, ERROR_CODE };