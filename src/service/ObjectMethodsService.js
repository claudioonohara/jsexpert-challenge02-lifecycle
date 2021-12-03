class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    return {
      toString() {
        return rawObject.name
      },
      valueOf() {
        return rawObject.age
      }
    };
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return {
      valueOf() {
        return  `[name="${rawObject.name}",age=${rawObject.age}]`
      },
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    return null;
  }
}

module.exports = ObjectMethodsService;
