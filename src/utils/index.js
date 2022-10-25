const toString = Object.prototype.toString;

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef(value) {
  return value !== undefined && value !== null;
}

export function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }
  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }
  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return false;
}
// 对象映射 'a.b' {a: {b: 'val'}}
export function get(object, path) {
  const keys = path.split(".");
  let result = object;

  keys.forEach((key) => {
    result = isDef(result) && isDef(result[key]) ? result[key] : null;
  });

  return result;
}

export const deepClone = function (origin) {
  if (origin === undefined) {
    return undefined;
  }
  return JSON.parse(JSON.stringify(origin));
};
