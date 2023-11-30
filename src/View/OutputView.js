import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printPurchaseInfo(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  },

  printLottoNum(lottoNum) {
    lottoNum.forEach((item) => {
      MissionUtils.Console.print(`[${item.join(", ")}]`);
    });
  },

  printResult(totalMatchResult, rate) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${totalMatchResult[0]}개`);
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${totalMatchResult[1]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${totalMatchResult[2]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalMatchResult[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${totalMatchResult[4]}개`
    );
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  },
};

export default OutputView;
