import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./View/InputView.js";
import Calculator from "./Calculator.js";
import OutputView from "./View/OutputView.js";
import Validator from "./Validator.js";
class App {
  async play() {
    const purchasePrice = await InputView.inputPurchasePrice();
    const purchaseCount = this.processCalculator(purchasePrice);
    const createdLottoNum = this.createLottoNumber(purchaseCount);
    const winNumber = await InputView.inputWinnerNumber();
    const bonus = await InputView.inputBonusNumber();
    this.processLottoResult(createdLottoNum, winNumber, bonus, purchasePrice);
  }

  processCalculator(purchasePrice) {
    const purchaseCount = Calculator.calculatePurchaseCount(purchasePrice);
    OutputView.printPurchaseInfo(purchaseCount);
    return purchaseCount;
  }

  createLottoNumber(count) {
    const lottoNumArr = Array.from({ length: count }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );

    const lottoNum = [];
    lottoNumArr.forEach((item) => {
      item.sort((a, b) => a - b);
      lottoNum.push(item);
    });
    OutputView.printLottoNum(lottoNum);
    return lottoNum;
  }

  processLottoResult(createdLottoNum, winNumber, bonus, purchasePrice) {
    const matchedCountArr = Calculator.setIncludedMatchingNumbers(
      createdLottoNum,
      winNumber
    );
    const totalMatchResult = Calculator.countMatchingNumbers(
      matchedCountArr,
      createdLottoNum,
      bonus
    );
    const totalBenefits = Calculator.calculateTotalBenefit(totalMatchResult);
    const benefitRate = Calculator.calculateBenefitRate(
      totalBenefits,
      purchasePrice
    );
    OutputView.printResult(totalMatchResult, benefitRate);
  }
}

export default App;
