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
    return Number(string) - Number(number);
  }
}

module.exports = WeirdMathService;
