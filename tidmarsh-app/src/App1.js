import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Tableau1 from './components/Tableau1';
import General from './components/General';
// import Tableau1 from './components/Tableau1Test';
// import { WhiteLightChart } from './components/WhiteLightChart';
import Page from './components/Page';
import HTMLFlipBook from "react-pageflip";

function App() {
  return (
    <div>
      {/* <HTMLFlipBook width={300} height={500}>
        <div><Tableau1/></div>
        <div><Tableau1/></div>
        <div><Tableau1/></div>
        <div><Tableau1/></div>
      </HTMLFlipBook> */}
      {/* <div className="App">
        <Container>
            <Tableau1/>
            <Tableau1/>
        </Container>
      </div>
      <Page/> */}
      <Container>
        <General/>
      </Container>
    </div>
  );
}

export default App;
