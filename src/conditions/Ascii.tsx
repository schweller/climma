import React from 'react';
import { Box, Color } from 'ink';

const Ascii = ({ id }: { id?: number }) => {
  switch (id) {
    // light thunderstorm 
    case 200:
    case 201:
    case 210:
    case 230:
    case 231:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.  .   _) '}</Box>
          <Box><Color yellow>{`  ⚡⌣⚡⌣ ⚡   `}</Color></Box>
          <Box>{' ʻ ʻ ʻ ʻ    '}</Box>
        </Box>        
      )
    // heavy thunderstorm
    case 202:
    case 211:
    case 212:
    case 221:
    case 232:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.  .   _) '}</Box>
          <Box><Color yellow>{`  ⚡⌣⚡⌣ ⚡   `}</Color></Box>
          <Box>{' ‚ʻ‚ʻ‚ʻ‚ʻ    '}</Box>
        </Box>        
      )      
    // rain / drizzle / light drizzle
    case 300:
    case 301:
    case 310:
    case 311:
    case 313:
    case 321:
    case 500:
    case 501:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.  .   _) '}</Box>
          <Box>{'  ʻ⌣ʻ ⌣ʻ   '}</Box>
          <Box>{' ʻ ʻ ʻ ʻ    '}</Box>
        </Box>        
      )
    // heavy rain / heavy drizzle
    case 302:
    case 312:
    case 314:
    case 502:
    case 503:
    case 504:
      return (
        <Box flexDirection="column">
          <Box>{'     _      '}</Box>
          <Box>{'  ⌢(  ᾿)⌢  '}</Box>
          <Box>{' (.  .   _) '}</Box>
          <Box>{' ‚ʻ⌣‚ʻ⌣ ʻ  '}</Box>
          <Box>{' ‚ʻ‚ʻ‚ʻ‚ʻ   '}</Box>
        </Box>
      )
    // shower rain
    case 520:
    case 521:
    case 522:
    case 531:
      return (
        <Box flexDirection="column">
          <Box><Color yellow>{' \\._/    '}</Color></Box>
          <Box><Color yellow>{'_/⌢(  ᾿)⌢ '}</Color></Box>
          <Box><Color cyan>{'(.__.____) '}</Color></Box>
          <Box>{' ‚ʻ‚ʻ‚ʻ‚ʻ '} </Box>
          <Box>{'‚ʻ‚ʻ‚ʻ‚ʻ  '}</Box>
        </Box>
      )
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
    case 511:
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
          <Box><Color cyan>{` \\⌢(   ).  `}</Color></Box>
          <Box><Color cyan>{` (___(__)  `}</Color></Box>
          <Box>{'           '}</Box>
        </Box>
      );
    // very cloudy
    case 803:
    case 804:
      return (
        <Box flexDirection="column">
          <Box>{'     _._     '}</Box>
          <Box>{'  ⌢(_(  ᾿)⌢ '}</Box>
          <Box>{' (.  ._  , ) '}</Box>          
          <Box>{'   ⌣(  _᾿⌣  '}</Box>
          <Box>{'     ⌣      '}</Box>
        </Box>
      );
    // condition does not have ascii yet (supposed to be a question mark)
    default:
      return (
        <Box flexDirection="column">
          <Box>{'   ⌢     '}</Box>
          <Box>{'  /  \\   '}</Box>
          <Box>{'  `  /    '}</Box>
          <Box>{'    \\    '} </Box>
          <Box>{'     •    '}</Box>
        </Box>        
      )
  }
};

export default Ascii;
