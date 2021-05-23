import { Background, Clock } from './components/home/index';
import Weather from './components/weather';

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
