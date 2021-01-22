import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Tableau1 from './components/Tableau1';
import General from './components/General';
// import Tableau1 from './components/Tableau1Test';
// import { WhiteLightChart } from './components/WhiteLightChart';

function App() {
  return (
    <div>
      <Container>
        <General/>
      </Container>
    </div>
  );
}

export default App;
