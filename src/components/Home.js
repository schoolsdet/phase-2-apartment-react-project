import React from 'react';
import {Container, Typography, Box } from '@material-ui/core'

const Home = () => {
  return (
    <Container>
        <Box>
            <Typography variant="h3" components="h2" align="center">Apartment Managent System</Typography>
            <Typography component="h2" align="center">React Phase 2 Project</Typography>
        </Box>
    </Container>
  )
}

export default Home