import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { CssBaseline } from '@mui/material';

function App() {
  //Paso 16.
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        {/*Paso 17. */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          hello
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
