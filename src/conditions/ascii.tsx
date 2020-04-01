import React from 'react'
import { Box, Color } from 'ink'

const Ascii = ({id}: {id: number}) => {
  switch (id) {
    case 800: // clear
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{"  \\  /  "}</Color></Box>
          <Box><Color yellow>{"   .-.   "}</Color></Box>
          <Box><Color yellow>{"- (   ) -"}</Color></Box>
          <Box><Color yellow>{"   `-᾿   "}</Color></Box>
          <Box><Color yellow>{"  /   \\ "}</Color></Box>          
        </Box>
      )
    case 801: 
      return (
        <Box flexDirection="column">
          <Box>{`  .-.   `}</Box>
          <Box>{` (   ). `}</Box>
          <Box>{`(___(__)`}</Box>
          <Box>{`⚡     ⚡ `}</Box>
        </Box>
      )
    default:
      return <Box>No weather ASCII available</Box>
  }
}

export default Ascii