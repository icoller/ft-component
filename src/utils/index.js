/*
 * @Author: coller
 * @Date: 2022-10-25 09:36:46
 * @LastEditTime: 2022-10-29 17:58:11
 * @Desc:
 */
const toString = Object.prototype.toString;

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef(value) {
  return value !== undefined && value !== null;
}

export function isString(val) {
  return is(val, "String");
}
export function isObject(val) {
  return val !== null && is(val, "Object");
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

export function isArray(val) {
  return val && Array.isArray(val);
}
