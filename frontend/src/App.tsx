import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Dashboard from './pages/dashboard';

function App() {
  //Paso 16.
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        {/*Paso 18 */}
        <BrowserRouter>
          {/*Paso 17. */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*paso 19 */}
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/predictions"
                  element={<div>prediction page</div>}
                />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
