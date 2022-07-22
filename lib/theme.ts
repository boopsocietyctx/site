import { extendTheme, theme as baseTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
    {
        styles: {
            global: {
                body: {
                    bg: 'gray.900',
                },
            },
        },
        colors: {
          brand: '#004aad',
        },
        fonts: {
            heading: `'Teko', Georgia, serif`,
        },
        layerStyles: {
            marqueEvent: {
              background: 'gray.300',
              padding: '1rem',
              color: 'black',
              boxShadow: '20px 20px var(--chakra-colors-brand)'
            },
            boardPicContainer: {
              flex: ['1 1 0'],
              maxWidth: ['80vw', '80vw', 'unset'],
              textAlign: 'center',
              fontSize: '4xl',
              fontFamily: 'heading',
            },
            boardPic: {
              borderRadius: '100%',
              borderWidth: '8px',
              borderStyle: 'solid',
            }
        },
        textStyles: {
            navMenuLink: {
                textTransform: 'uppercase',
                fontFamily: 'heading',
                fontSize: '2xl',
            },
            shoutHeading: {
                textTransform: 'uppercase',
                color: 'red.500',
                textShadow: '3px 3px black, 4px 4px rgba(255, 255, 255, 0.5)'
            },
            marqueHeader: {
              fontSize: '2xl',
              fontWeight: 700,
              mb: '1',
            },
            marqueDesc: {
              fontSize: 'xl',
              fontWeight: 400,
              textTranform: 'uppercase'
            }
        },
        config: {
            initialColorMode: 'dark',
        },
    },
    withDefaultColorScheme({ colorScheme: 'red' })
);

export { theme };
