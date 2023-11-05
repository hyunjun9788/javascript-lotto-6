import { Console, Random } from "@woowacourse/mission-utils";

class LottoResultChecker {
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => parseInt(element));
  }
  convertToNum(bonus) {
    return Number(bonus);
  }
  async inputWinningLottoNum() {
    return await Console.readLineAsync("당첨 번호를 입력해주세요.");
  }
  async inputBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }
}

export default LottoResultChecker;
