!(function (global) {
  'use strict';

  /**
   * @param {*} str
   * @return {Boolean}
   */
  function isString(str) {
    return (toString.call(str) == '[object String]');
  }

  /**
   * @param {*} num
   * @return {Boolean}
   */
  function isNumber(num) {
    return (toString.call(num) == '[object Number]');
  }

  /**
   * @param {*} bool
   * @return {Boolean}
   */
  function isBoolean(bool) {
    return (toString.call(bool) == '[object Boolean]');
  }

  /**
   * @param {*} func
   * @return {Boolean}
   */
  function isFunction(func) {
    return (toString.call(func) == '[object Function]');
  }

  /**
   * @param {*} arr
   * @return {Boolean}
   */
  function isArray(arr) {
    return (toString.call(arr) == '[object Array]');
  }

  /**
   * @param {*} obj
   * @return {Boolean}
   */
  function isObject(obj) {
    return (toString.call(obj) == '[object Object]');
  }

  /**
   * @param {*} nl
   * @return {Boolean}
   */
  function isNull(nl) {
    return (toString.call(nl) == '[object Null]');
  }

  /**
   * @param {*} ud
   * @return {Boolean}
   */
  function isUndefined(ud) {
    return (toString.call(ud) == '[object Undefined]');
  }

  global.isString = isString;
  global.isNumber = isNumber;
  global.isBoolean = isBoolean;
  global.isFunction = isFunction;
  global.isArray = isArray;
  global.isObject = isObject;
  global.isNull = isNull;
  global.isUndefined = isUndefined;

})(window);
