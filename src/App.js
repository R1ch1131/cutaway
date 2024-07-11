import './App.css';
import './Styles/index.css'
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Wish } from './Components/Wish';
import { Connect } from './Components/Connect';

function App() {
  return (
    <div className='background'>
      <Header />
      <About />
      <Wish />
      <Connect />
    </div>
  );
}

export default App;
