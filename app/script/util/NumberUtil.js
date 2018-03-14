/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

z.util.NumberUtil = {
  capToByte: function(value) {
    const MAX_VALUE = 255;
    return Math.min(Math.abs(parseInt(value * MAX_VALUE, 10)), MAX_VALUE);
  },
  getRandomNumber: function(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  },
  inRange: function(value, lowerBound, upperBound) {
    return value >= lowerBound && value <= upperBound;
  },
  rootMeanSquare: function(floatArray) {
    const pow = floatArray.map(number => Math.pow(number, 2));
    const sum = pow.reduce((power, number) => power + number);
    return Math.sqrt(sum) / floatArray.length;
  },
};
