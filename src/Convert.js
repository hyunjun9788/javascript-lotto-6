const Convert = {
  convertToNum(input) {
    return Number(input);
  },

  convertToArr(input) {
    return input.split(",").map(Number);
  },
};

export default Convert;
