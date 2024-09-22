import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
const Header = (Props:any) => { 
 const {setDarkMode, darkMode}:any = Props; 
    // Toggle between light and dark mode
    const handleThemeChange = () => {
      setDarkMode(!darkMode);
    };
  return (
  <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chess App
      </Typography>
      <IconButton onClick={handleThemeChange} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Toolbar>
  </AppBar>
  );
};

export default Header;
