import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box} from '@mui/material';
import Home from '../../component/Home/Home';
import Header from '../../component/Header/Header';
const HomePage = (props: any) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    // Create a theme based on the darkMode state
    const theme = useMemo(() =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }), [darkMode]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Ensure the theme is applied globally */}
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Box sx={{ textAlign: 'center', mt: 4 }}>          
                <Box mt={4}>
                    <Home />
                </Box>
            </Box>
      </ThemeProvider>
    );
};

export default HomePage;
