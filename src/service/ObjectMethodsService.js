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
