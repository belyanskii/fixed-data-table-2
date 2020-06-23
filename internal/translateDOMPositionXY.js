/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule translateDOMPositionXY
 * @typechecks
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getVendorPrefixedName = _interopRequireDefault(require('./getVendorPrefixedName'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TRANSFORM = (0, _getVendorPrefixedName["default"])('transform');
var BACKFACE_VISIBILITY = (0, _getVendorPrefixedName["default"])('backfaceVisibility');

var translateDOMPositionXY = function () {
  return function (
  /*object*/
  style,
  /*number*/
  x,
  /*number*/
  y) {
    style.left = x + 'px';
    style.top = y + 'px';
  };
}();

var _default = translateDOMPositionXY;
exports["default"] = _default;