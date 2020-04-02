import React from 'react';
import { Box, Color } from 'ink';


const Ascii = ({ id }: { id?: number }) => {
  switch (id) {
    // snow
    case 600:
    case 601:
    case 602:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.__.____) '}</Box>
          <Box>{' *   *   *  '}</Box>
          <Box>{'*   *   *   '}</Box>
        </Box>        
      )
    // sleet / rain and snow
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.__.____) '}</Box>
          <Box>{' . * . * . '} </Box>
          <Box>{'* . * . *   '}</Box>
        </Box>        
      )
    // sleet shower / snow shower
    case 620:
    case 621:
    case 622:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{' \\._/    '}</Color></Box>
          <Box><Color yellow>{'_/⌢(  ᾿)⌢ '}</Color></Box>
          <Box><Color cyan>{'(.__.____) '}</Color></Box>
          <Box>{' . * . * . '} </Box>
          <Box>{'* . * . *  '}</Box>
        </Box>        
      )
    // fog / mist / haze
    case 701:
    case 711:
    case 721:
    case 741:
      return (
        <Box flexDirection="column">
          <Box>{'           '}</Box>
          <Box><Color hex="#8cd7f4">{'_ - _ - _ -'}</Color></Box>
          <Box><Color hex="#e8f7fc">{' - _ - _ - '}</Color></Box>
          <Box><Color hex="#e8f7fc">{'- _ - _ - _'}</Color></Box>
          <Box>{'           '}</Box>
        </Box>
      )
    // clear
    case 800:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{'  \\   /  '}</Color></Box>
          <Box><Color yellowBright>{'   .-.   '}</Color></Box>
          <Box><Color yellowBright>{'- (   ) -'}</Color></Box>
          <Box><Color yellowBright>{'   `-᾿   '}</Color></Box>
          <Box><Color yellow>{'  /   \\ '}</Color></Box>
        </Box>
      );
    // partial clouds
    case 801:
    case 802:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{'  \\_      '}</Color></Box>
          <Box><Color yellow>{`_/ .-.     `}</Color></Box>
          <Box><Color cyan>{` \\(   ).  `}</Color></Box>
          <Box><Color cyan>{` (___(__)  `}</Color></Box>
          <Box>{'           '}</Box>
        </Box>
      );
    // very cloudy
    case 803:
    case 804:
      return (
        <Box flexDirection="column">
          <Box>{'           '}</Box>
          <Box>
            <Color cyan>{`   _.--.   `}</Color>
          </Box>
          <Box>
            <Color cyan>{` .(_(   ᾿) `}</Color>
          </Box>
          <Box>
            <Color cyan>{`(__.__)__᾿)`}</Color>
          </Box>
          <Box>{'            '}</Box>
        </Box>
      );
    default:
      return <Box>No weather ASCII available</Box>;
  }
};

export default Ascii;
