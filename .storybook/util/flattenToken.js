import { forEach, isObject } from 'lodash';

/**
 * Given an object of an arbitrary depth, flatten the names using specified separator,
 * and add to any provided suffix. Append the suffix as you recurse.
 *
 * When it reaches an @, treat that as the root name.
 *
 * @param {TokenMap} obj One of the StyleDictionary-structured token files
 * @param {string} themePrefix Prefix to append flattened token definition to ('')
 * @param {string} separator character to use to separated the flattened token pieces ('-')
 * @returns object key-value pairs defining the full CSS token variable name to the value
 */
export default function flatten(obj, themePrefix = '', separator = '-') {
  const result = {};

  function flat(o, prefix = themePrefix) {
    forEach(o, (value, key) => {
      if (isObject(value)) {
        if (value.value) {
          result[
            `${key === '@' ? prefix.slice(0, -1) : prefix}${
              key === '@' ? '' : key
            }`
          ] = value.value;
        } else {
          flat(value, `${prefix}${key}${separator}`);
        }
      } else {
        result[`${prefix}${key}`] = value;
      }
    });
  }

  flat(obj);

  return result;
}
