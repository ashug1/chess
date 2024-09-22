import React from 'react';
import {Typography, Button, Container, Box} from '@mui/material';


const Home = () => { 
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Chess
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Improve your skills, challenge opponents, and enjoy the timeless game of Chess.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={()=>{
            window.location.href='/game';
          }}>
            Play Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
