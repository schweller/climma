import React from 'react'

const directionsMap = ["↓", "↙", "←", "↖", "↑", "↗", "→", "↘"]

/**
 * Returns a direction unicode character from a degree.
 * Angle changes at every 22.5 degree (plus .5 to prevent ties). 
 * Gets the mod 8 to pick a value from directionsMap 
 * @param angle Degree provided by the API 
 * @returns 
 */
const getDirectionChar = (angle: number | undefined): string => {
  if (angle === undefined) {
    return '?'
  }
  return directionsMap[(Math.floor((angle / 22.5) + 0.5)) % 8]
}

const Direction = ({deg}: { deg?: number}) => {
  const char = getDirectionChar(deg)
  
  return <>{char}</>
}

export default Direction;
