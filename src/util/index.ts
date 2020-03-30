/**
Given a number and a color map, compares the number with the first number of the map.
If its on the range, returns the second number of the map.
For the color map, check: https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit

@param n - Hexadecimal value representing the desired color.

@param map - Array of arrays, containing two numbers.

@example
```
const colMap = [[16, 118], [19, 154]]
getColorInRange(14, colMap)
```
*/
const getColorInRange = (n: number, map: number[][]) => {
  const result = map.find(element => n < element[0])
  if (result === undefined) {
    return 203
  }
  return result[1]
}

export { getColorInRange }