// Main Layout
import { createTheme, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import { Container } from '@mui/material'
import arEG from '@mui/material/locale'


function Layout({ children }) {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#FFD706',
        },
        secondary: {
          main: '#ffface',
        },
        mode: 'dark',
      },
      typography: {
        fontFamily: 'Tajawal, sans-serif',
      },
      direction: 'rtl',
      components: {
        MuiAvatar: {
          styleOverrides: {
            root: {
              backgroundColor: '#FFD706'
            }
          }
        },
        MuiCard: {
          styleOverrides: {
            root: {
              background: 'none',
              boxShadow: '0 8px 32px 0 rgba( 	255, 215, 6, 0.12 )'
            }
          }
        }
      },
    },
    arEG
  )

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Container>
          {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout
