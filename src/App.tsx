import { Background, Clock, Weather } from './components/home/index';

import './styles/App.scss';
import './fonts/roboto.css';

function App() {
  return (
    <div>
      <Background/>
      <Clock/>
      <Weather/>
    </div>
  );
}

export default App;
