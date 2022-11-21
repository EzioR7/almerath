import Head from 'next/head'
import { Container, Typography, Box} from '@mui/material'
import { Assignment } from '@mui/icons-material'
import IssueStepper from 'components/issue/IssueStepper'
import { StepsProvider } from 'context/Steps'
import { IssueProvider } from 'context/Issue'

export default function new_issue() {
  return (
    <IssueProvider>
      <StepsProvider>
        <Container maxWidth="lg">
          <Head>
            <title>الميراث | حل مسألة جديدة</title>
          </Head>
          <Box sx={{ p: '1rem', mt: '5rem' }} className="glass-bg">
            <Typography 
              variant='h1' 
              align='center' 
              sx={{fontSize: "2.5rem", my: "1.5rem"}} 
              fontWeight="bold" color="primary">
                <Assignment fontSize="inherit" /> مسألة جديدة
              </Typography>
              <IssueStepper />
          </Box>
        </Container>
      </StepsProvider>
    </IssueProvider>
  )
}