import { Box, Grid } from '@mui/material'
import React from 'react'
import { Banner, Form } from './components'

const App = () => {


  return (
    <>
      <Box sx={{
        width: '80%',
        margin: '0 auto',
        height: '100vh',
        padding: '0',
      }}>
        <Grid container columnSpacing={{ xs: 2, sm: 2, md: 5 }} height='100%' alignItems='center'>
          <Grid item xs={12} md={6} sm={12}>
            <Banner />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Form />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App