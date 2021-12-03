class StatementsService {
  getReturnBasedOnStatement(condition1, condition2) {
    return condition1 || condition2;
  }

  getReturnBasedOnStatement2(condition1, condition2) {
    return condition1 && condition2;
  }

  getReturnBasedOnStatement3(condition1, condition2, condition3) {
    return condition2 || condition1 && condition3;
  }

  getReturnBasedOnStatement4(condition1, condition2, condition3) {
    return condition1 && condition3 || condition2;
  }
}

module.exports = StatementsService;
