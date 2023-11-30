import { ERROR } from "./constant/lotto.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const PATTERN = /^(\d+,\d+,\d+,\d+,\d+,\d+)$/;
    if (numbers.length !== 6) {
      throw new Error(ERROR.length);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.duplication);
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.outOfRange);
      }
      if (!PATTERN.test(numbers)) {
        throw new Error(ERROR.invalidNum);
      }
    });
  }

  get getWinnerNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
