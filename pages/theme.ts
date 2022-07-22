import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Teko', Georgia, serif`,
    },
    layerStyle: {
      marqueEvent: {
        
      }
    },
    textStyles: {
        navMenuLink: {
            textTransform: 'uppercase',
            fontFamily: 'heading',
            fontSize: '2xl'
        },
        shoutHeading: {
          textTransform: 'uppercase',
          color: 'red.500',
          textShadow: '3px 3px black, 4px 4px rgba(255, 255, 255, 0.7)'
        }
    },
    config: {
        initialColorMode: 'dark',
    },
});

export { theme };
