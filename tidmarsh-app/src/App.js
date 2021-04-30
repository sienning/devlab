import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import PageArticle from "./articles/PageArticle";
import Article1 from "./articles/Article1";
// import { WhiteLightChart } from './components/WhiteLightChart';

function App() {
  return (
    <div className="App">
      <Container>
        <PageArticle>
          {/* <Article2 isLoading={isLoading /> */}
          <Article1 />
        </PageArticle>
        {/* <HumidityTemperatureChart/> */}
        {/* <WhiteLightChart/> */}
      </Container>
    </div>
  );
}

export default App;
