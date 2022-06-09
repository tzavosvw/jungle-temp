// import logo from './coming-soon.webp';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
const isDesktop = useMediaQuery('(min-width: 1080px)');

  return (
    <div className="App1">
      <header className="App-header1">
      {isDesktop ? <img src="coming-soon.webp" className="App-logo1" alt="logo" /> : <span></span>}
        
      </header>
    </div>
  );
}

export default App;
