class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    return number + boolean;
  }

  getWeirdStringBooleanMath(string, boolean) {
    return string + boolean;
  }

  getWeirdStringBooleanMath2(string, boolean) {
    return Number(string) - boolean;
  }

  getWeirdStringNumberMath(string, number) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    return null;
  }
}

module.exports = WeirdMathService;
