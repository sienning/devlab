import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Tableau1 from './components/Tableau1';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container> 
          <Tableau1/>
      </Container>
    </div>
  );
}

export default App;
