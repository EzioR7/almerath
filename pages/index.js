import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.png'
import { Grid, Card, CardActions, CardContent, Typography, Button, Container } from '@mui/material'
import { PlayCircleFilledWhiteOutlined} from '@mui/icons-material'

export default function Home() {
  return (
    <div>
      <Head>
        <title>الميراث | الرئيسية</title>
      </Head>
      <Card 
        className="glass-bg"
        sx={{ textAlign: "center", mt: "12rem" }}
      >
        <CardContent>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid item md={6}>
              <Container>
                <Image src={Logo} width="500" height="500" placeholder="blur" alt="Logo" />
              </Container>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h5" lineHeight={1.7}>
                حساب المواريث من أصحاب الفروض و العصبات حسب الشريعة الإسلاميّة و على المذاهب الحنفي و الشافعي و المالكي.
              </Typography>
              <CardActions>
                <Link href="/new_issue">
                  <Button variant="outlined" sx={{fontSize: '1.5rem', m: 'auto', mt: '.5rem' }}><PlayCircleFilledWhiteOutlined fontSize='inherit' sx={{ ml: '.5rem'}} /> فلنبدأ بالحساب!</Button>
                </Link>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}
