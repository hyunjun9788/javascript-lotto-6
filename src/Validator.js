import { ERROR } from "./constant/lotto.js";
const Validator = {
  validateInputPrice(input) {
    const PATTERN = /^\d+$/;
    if (!PATTERN.test(input)) {
      throw new Error(ERROR.invalidPrice);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR.invalidPrice);
    }
  },
  validateBonusNumber(bonus, winNumber) {
    const PATTERN = /^(\d+)$/;
    if (winNumber.includes(bonus)) {
      throw new Error(ERROR.notSameWinNum);
    }
    if (!PATTERN.test(bonus)) {
      throw new Error(ERROR.invalidBonus);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR.outOfRange);
    }
  },
};

export default Validator;
