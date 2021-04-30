import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
// import { Container } from 'semantic-ui-react';
// import Tableau1 from './components/Tableau1';
import Accueil from './components/Page/Accueil';
import APropos from './components/Page/APropos';
import Kiosque from './components/Page/Kiosque';
import Footer from './components/Footer';
// import { WhiteLightChart } from './components/WhiteLightChart';
import { Image } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import Article1 from './articles/Article1'
import PageArticle from './articles/PageArticle'
const queryClient = new QueryClient();

axios.defaults.baseURL = "https://chain-api.media.mit.edu";
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <nav className="Navbar">
              <div className="lien-accueil">
                <Link to="/">
                  <Image className="logo-petit" src="./images/logo-petit.svg" style={{ width: 90 }} />
                </Link>
              </div>

              <div className="lien-a-propos">
                <Link to="/a-propos">À Propos</Link>
              </div>
              <div className="lien-kiosque">
                <Link to="/kiosque">Le Kiosque</Link>
              </div>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/a-propos">
                <APropos />
              </Route>
              <Route path="/kiosque">
                <Kiosque />
              </Route>
              <Route path="/article/1">
                <QueryClientProvider client={queryClient}>
                    <PageArticle>
                      <Article1 />
                    </PageArticle>
                </QueryClientProvider>
              </Route>
              <Route exact path="/">
                <Accueil />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
      {/* <QueryClientProvider client={queryClient}>
        <Container>
          <PageArticle>
            <Article1 />
          </PageArticle>
        </Container>
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
