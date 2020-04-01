import React from 'react'
import { Box, Color } from 'ink'

const Ascii = ({id}: {id?: number}) => {
  switch (id) {
    // clear
    case 800:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{"  \\   /  "}</Color></Box>
          <Box><Color yellowBright>{"   .-.   "}</Color></Box>
          <Box><Color yellowBright>{"- (   ) -"}</Color></Box>
          <Box><Color yellowBright>{"   `-᾿   "}</Color></Box>
          <Box><Color yellow>{"  /   \\ "}</Color></Box>        
        </Box>
      )
    // partial clouds
    case 801:  
    case 802:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{"  \\_      "}</Color></Box>
          <Box><Color yellow>{`_/ .-.     `}</Color></Box>
          <Box><Color cyan>{` \\(   ).  `}</Color></Box>
          <Box><Color cyan>{` (___(__)  `}</Color></Box>
          <Box>{"           "}</Box>
        </Box>
      )
    // very cloudy
    case 803:
    case 804:
      return (
        <Box flexDirection="column">
          <Box>{"           "}</Box>
          <Box><Color cyan>{`   _.--.   `}</Color></Box>
          <Box><Color cyan>{` .(_(   ᾿) `}</Color></Box>
          <Box><Color cyan>{`(__.__)__᾿)`}</Color></Box>
          <Box>{"            "}</Box>          
        </Box>
      )
    default:
      return <Box>No weather ASCII available</Box>
  }
}

export default Ascii