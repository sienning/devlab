import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Tableau1 from './components/Tableau1';
import { HumidityTemperatureChart } from './components/HumidityTemperatureChart';
import { WhiteLightChart } from './components/WhiteLightChart';

function App() {
  return (
    <div className="App">
      <Container>
          <Tableau1/>
          {/* <HumidityTemperatureChart/> */}
          <WhiteLightChart/>
      </Container>
    </div>
  );
}

export default App;
