import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import PageArticle from "./articles/PageArticle";
import Article1 from "./articles/Article1";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

// import { WhiteLightChart } from './components/WhiteLightChart';
const queryClient = new QueryClient();

axios.defaults.baseURL = "https://chain-api.media.mit.edu";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Container>
          <PageArticle>
            {/* <Article2 isLoading={isLoading /> */}
            <Article1 />
          </PageArticle>
          {/* <HumidityTemperatureChart/> */}
          {/* <WhiteLightChart/> */}
        </Container>
      </QueryClientProvider>
    </div>
  );
}

export default App;
