import { MissionUtils } from "@woowacourse/mission-utils";
import Convert from "../Convert.js";
import Lotto from "../Lotto.js";
import Validator from "../Validator.js";
const InputView = {
  async inputPurchasePrice() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        MissionUtils.Console.print("");
        const purchasePrice = Convert.convertToNum(input);
        Validator.validateInputPrice(purchasePrice);
        return purchasePrice;
      } catch (e) {
        MissionUtils.Console.print(e.message);
      }
    }
  },

  async inputWinnerNumber() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        );
        MissionUtils.Console.print("");
        this.winnerNum = Convert.convertToArr(input);
        this.lotto = new Lotto(this.winnerNum);
        const getWinnerNum = this.lotto.getWinnerNumber;
        return getWinnerNum;
      } catch (e) {
        MissionUtils.Console.print(e.message);
      }
    }
  },

  async inputBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNum = Convert.convertToNum(input);
    Validator.validateBonusNumber(bonusNum, this.winnerNum);
    return bonusNum;
  },
};
export default InputView;
