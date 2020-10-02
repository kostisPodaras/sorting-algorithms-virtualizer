/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'core-js/modules/es6.set';
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es7.object.entries';
import 'raf/polyfill';

import { isIE, isIE11 } from 'core/utils';

import '_mock/setup';

const onClientEntry = () => {
  if (isIE() && !isIE11() && window.location.pathname !== '/ie/') {
    window.location = '/ie/';
  }
};

export { onClientEntry };

// NOTE: The following are possible polyfill imports based on the platforms needed. (Just for reference here)
//
// import 'core-js/modules/es6.array.copy-within' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.array.fill' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.array.find' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.array.find-index' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.array.from' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.array.includes' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.array.iterator' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.array.of' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.array.sort' // { "android":"4.4.3", "chrome":"49", "ios":"8" }
// import 'core-js/modules/es6.array.species' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.date.to-json' // { "ios":"8" }
// import 'core-js/modules/es6.date.to-primitive' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.function.has-instance' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.function.name' // { "ie":"11" }
// import 'core-js/modules/es6.map' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.math.acosh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.asinh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.atanh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.cbrt' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.clz32' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.math.cosh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.expm1' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.fround' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.hypot' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.imul' // { "ie":"11" }
// import 'core-js/modules/es6.math.log1p' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.log10' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.log2' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.sign' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.math.sinh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.tanh' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.math.trunc' // { "android":"4.4.3", "ie":"11" }
// import 'core-js/modules/es6.number.constructor' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.epsilon' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.is-finite' // { "ie":"11", "ios":"8", "opera":"57" }
// import 'core-js/modules/es6.number.is-integer' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.is-nan' // { "ie":"11", "ios":"8", "opera":"57" }
// import 'core-js/modules/es6.number.is-safe-integer' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.max-safe-integer' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.min-safe-integer' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.parse-float' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.number.parse-int' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.assign' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.define-getter' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.define-setter' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.entries' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.freeze' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.get-own-property-descriptor' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.get-own-property-descriptors' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.get-own-property-names' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.get-prototype-of' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.lookup-getter' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.object.lookup-setter' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.prevent-extensions' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.is' // { "ie":"11", "ios":"8", "opera":"57" }
// import 'core-js/modules/es6.object.is-frozen' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.is-sealed' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.is-extensible' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.keys' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.seal' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.object.set-prototype-of' // { "android":"4.4.3", "ios":"8" }
// import 'core-js/modules/es7.object.values' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.promise' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.promise.finally' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.apply' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.construct' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.define-property' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.delete-property' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.get' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.get-own-property-descriptor' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.get-prototype-of' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.has' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.is-extensible' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.own-keys' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.prevent-extensions' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.set' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.reflect.set-prototype-of' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.constructor' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.flags' // { "android":"4.4.3", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.match' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.replace' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.split' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.search' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.regexp.to-string' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.set' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.symbol' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.symbol.async-iterator' // { "android":"4.4.3", "chrome":"49", "edge":"17", "ie":"11", "ios":"8", "safari":"11.1" }
// import 'core-js/modules/es6.string.anchor' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.big' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.blink' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.bold' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.code-point-at' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.ends-with' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.fixed' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.fontcolor' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.fontsize' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.from-code-point' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.includes' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.italics' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.iterator' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.link' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es7.string.pad-start' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es7.string.pad-end' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.raw' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.repeat' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.small' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.starts-with' // { "android":"4.4.3", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.string.strike' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.sub' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.string.sup' // { "ie":"11", "opera":"57" }
// import 'core-js/modules/es6.typed.array-buffer' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.int8-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.uint8-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.uint8-clamped-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.int16-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.uint16-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.int32-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.uint32-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.float32-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.typed.float64-array' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.weak-map' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/es6.weak-set' // { "android":"4.4.3", "chrome":"49", "ie":"11", "ios":"8" }
// import 'core-js/modules/web.timers' // { "android":"4.4.3", "chrome":"49", "edge":"17", "firefox":"64", "ie":"11", "ios":"8", "opera":"57", "safari":"11.1" }
// import 'core-js/modules/web.immediate' // { "android":"4.4.3", "chrome":"49", "edge":"17", "firefox":"64", "ie":"11", "ios":"8", "opera":"57", "safari":"11.1" }
// import 'core-js/modules/web.dom.iterable' // { "android":"4.4.3", "chrome":"49", "edge":"17", "firefox":"64", "ie":"11", "ios":"8", "opera":"57", "safari":"11.1" }
