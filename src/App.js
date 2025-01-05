// import React from 'react';
// import './index.css';
// import Header from './Components/Header';
// import HeroSec from './Components/HeroSec';
// import HeroSection from './Components/HeroSection';
// function AppContent(props) {
//   // const classes = useStyles(); // ✅ This is safe because it is called inside ThemeProvider
//   return (<div>
//     <HeroSection />;
//   </div>)
// }

// function App(props) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppContent {...props} />
//     </ThemeProvider>
//   );
// }

// export default App;
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Components/Header';
import HeroSec from './Components/HeroSec';
import HeroSection from './Components/HeroSection';

const theme = createTheme();

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent {...props} />
    </ThemeProvider>
  );
}


function AppContent(props) {
  return (
    <div>
      <Header/>
      <HeroSection/>;
    </div>
  );
}

export default App;