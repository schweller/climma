import React from 'react';
import { Color } from 'ink';
import chalk from 'chalk';

import { getColorInRange } from '../util';

const temperatureColor = (temp: number) => {
  const colorMap = [
    [-15, 21],
    [-12, 27],
    [-9, 33],
    [-6, 39],
    [-3, 45],
    [0, 51],
    [2, 50],
    [4, 49],
    [6, 48],
    [8, 47],
    [10, 46],
    [13, 82],
    [16, 118],
    [19, 154],
    [22, 190],
    [25, 226],
    [28, 220],
    [31, 214],
    [34, 208],
    [37, 202],
  ];

  const n = getColorInRange(temp, colorMap);
  return n;
};

const Temperature = ({ temp }: { temp?: number }) => {
  if (temp === undefined) {
    return <Color>{chalk.ansi256(203)(temp)} °C</Color>;
  }

  const n = temperatureColor(temp);
  return <Color>{chalk.ansi256(n)(temp)} °C</Color>;
};

export default Temperature;
