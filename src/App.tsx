import React from 'react';
import Background from './components/background';
import Clock from './components/clock';
import Weather from './components/weather';
import './App.css';
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
