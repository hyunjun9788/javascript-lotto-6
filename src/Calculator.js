import Convert from "./Convert.js";
const Calculator = {
  calculatePurchaseCount(purchasePrice) {
    const purchaseCount = purchasePrice / 1000;
    return purchaseCount;
  },

  setIncludedMatchingNumbers(createdLottoNum, winNumber) {
    return createdLottoNum.map(
      (arr) => arr.filter((element) => winNumber.includes(element)).length
    );
  },
  countMatchingNumbers(matchedArr, myNum, bonus) {
    const threeMatch = this.calculateThreeMatch(matchedArr);
    const fourMatch = this.calculateFourMatch(matchedArr);
    const fiveMatch = this.calculateFiveMatch(matchedArr, myNum, bonus);
    const fiveAndBonusMatch = this.calculateFiveAndBonusMatch(
      matchedArr,
      myNum,
      bonus
    );
    const sixMatch = this.calculateSixMatch(matchedArr);
    return [threeMatch, fourMatch, fiveMatch, fiveAndBonusMatch, sixMatch];
  },

  calculateThreeMatch(arr) {
    let three = 0;
    arr.forEach((item) => {
      if (item === 3) {
        three += 1;
      }
    });
    return three;
  },

  calculateFourMatch(arr) {
    let four = 0;
    arr.forEach((item) => {
      if (item === 4) {
        four += 1;
      }
    });
    return four;
  },

  calculateFiveMatch(arr, myNum, bonus) {
    let five = 0;
    arr.forEach((item, index) => {
      if (item === 5 && !myNum[index].includes(bonus)) {
        five += 1;
      }
    });
    return five;
  },

  calculateFiveAndBonusMatch(arr, myNum, bonus) {
    let fiveAndBonus = 0;
    arr.forEach((item, index) => {
      if (item === 5 && myNum[index].includes(bonus)) {
        fiveAndBonus += 1;
      }
    });
    return fiveAndBonus;
  },

  calculateSixMatch(arr) {
    let six = 0;
    arr.forEach((item) => {
      if (item === 6) {
        six += 1;
      }
    });
    return six;
  },

  calculateTotalBenefit(matchResultArr) {
    const totalBenefits =
      5000 * matchResultArr[0] +
      50000 * matchResultArr[1] +
      1500000 * matchResultArr[2] +
      30000000 * matchResultArr[3] +
      2000000000 * matchResultArr[4];
    return totalBenefits;
  },

  calculateBenefitRate(totalBenefits, purchasePrice) {
    const rate = ((totalBenefits / purchasePrice) * 100).toFixed(1);
    const benefitRate = Convert.convertToNum(rate);
    return benefitRate.toLocaleString();
  },
};

export default Calculator;
