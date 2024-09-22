import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box} from '@mui/material';
import { Toaster } from 'react-hot-toast';
import ChessGame from '../../component/ChessGame/ChessGame';
import Header from '../../component/Header/Header';
const ChessGamePage = (props: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
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
                    <ChessGame />
                </Box>
            </Box>
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                            color: '#fff',
                            marginTop: '100px',
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                            color: '#fff',
                            marginTop: '100px',
                        },
                    },
                }}
            ></Toaster>
      </ThemeProvider>
    );
};

export default ChessGamePage;
