import chalk from 'chalk'

import { getColorInRange } from '../util'

const temperatureColor = (temp: number) => {
  const colorMap = [[-15, 21], [-12, 27], [-9, 33], [-6, 39], [-3, 45],
    [0, 51], [2, 50], [4, 49], [6, 48], [8, 47],
    [10, 46], [13, 82], [16, 118], [19, 154], [22, 190],
    [25, 226], [28, 220], [31, 214], [34, 208], [37, 202]]

  const n = getColorInRange(temp, colorMap)
  return n
}

export default temperatureColor