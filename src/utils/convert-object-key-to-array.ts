/**
 * Transform specific Object key values into array values
 * @param obj
 * @param targetFields
 */
export const convertObjectKeyToArray = (obj: any, targetFields: string[]) => {
  if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
    return obj;
  }

  const result = { ...obj };

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(result)) {
    targetFields.forEach((expression) => {
      if (
        result[key] &&
        result[key] instanceof Object &&
        Object.prototype.hasOwnProperty.call(result[key], expression)
      ) {
        if (
          (result[key][expression] &&
            typeof result[key][expression] === 'string') ||
          typeof result[key][expression] === 'number'
        ) {
          result[key][expression] = [result[key][expression]];
        }
      }
    });
  }
  return { ...result };
};
