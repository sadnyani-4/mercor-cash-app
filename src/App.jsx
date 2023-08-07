import './App.css';
import Cover from './components/Cover';
import Payments from './components/Payments';
import Banking from './components/Banking';
import Boost from './components/Boost';
import Investing from './components/Investing'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Cover/>
      <Payments/>
      <Banking/>
      <Boost/>
      <Investing/>
      <About/>
    </div>
  );
}

export default App;
