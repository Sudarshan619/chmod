
import './App.css';
import { ChmodProvider} from './components/chmodContext';
import ChmodCalculator from './components/chmod_calculator';
import Textbox from './components/textbox';
import Description from './components/description';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <ChmodProvider>
      <Navbar></Navbar>
      <div className='container4'>
      <ChmodCalculator></ChmodCalculator>
      <Textbox></Textbox>
      </div>
      <Description></Description>
      </ChmodProvider>
    </div>
  );
}

export default App;
