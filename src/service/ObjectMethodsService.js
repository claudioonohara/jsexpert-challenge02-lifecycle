class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    return {
      valueOf() {
        return rawObject.age
      }
    };
  }

  getEnhancedObject2(rawObject) {
    return {
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    return {
      [Symbol.toPrimitive](coercionType) {
        const types = {
            string: `[name="${rawObject.name}",age=${rawObject.age}]`,
            number: rawObject.age
        }

        return types[coercionType]
      }
    }
  }
}

module.exports = ObjectMethodsService;
