import './App.css';
import {Routes , Route} from 'react-router-dom';

//? PAGES
import Create from './Pages/Create';
import Notes from './Pages/Notes';

// change default MUI theme 
import {createTheme , ThemeProvider} from '@mui/material';
import {purple} from '@mui/material/colors';

const theme = createTheme({
  palette:{
    secondary:purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Create />}/>
          <Route path='/notes' element={<Notes />}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
