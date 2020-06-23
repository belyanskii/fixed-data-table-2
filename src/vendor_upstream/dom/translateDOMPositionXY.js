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

import getVendorPrefixedName from 'getVendorPrefixedName';

var TRANSFORM = getVendorPrefixedName('transform');
var BACKFACE_VISIBILITY = getVendorPrefixedName('backfaceVisibility');

var translateDOMPositionXY = (function() {
  return function(/*object*/ style, /*number*/ x, /*number*/ y) {
    style.left = x + 'px';
    style.top = y + 'px';
  };
})();

export default translateDOMPositionXY;
