import React, { Component } from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TIDMARSH_UPDATES_DEVICES } from "../../utils/api";
class Accueil extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Container className="accueil">
          <div id="header-title">
            <Image src="./images/logo.svg" fluid />
          </div>
          <span style={{ textAlign: "center" }}>
            <Header
              style={{
                height: "auto",
                paddingTop: "20px",
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              Bienvenu sur le site du Daily Data'Venir !
            </Header>
            <p
              style={{
                height: "auto",
                fontFamily: "'Londrina Solid', cursive",
              }}
            >
              Les Zones Humides sont un sujet à prendre très au sérieux, alors
              pourquoi ne pas en apprendre un peu plus avec ce journal ?
            </p>
            <p
              style={{
                height: "auto",
                fontFamily: "'Grenze Gotisch', cursive",
              }}
            >
              Découvrez le monde des Zones Humides avec l'univers d'Harry Potter
              ! Inspiré du Daily Prophet, le fameux journal mouvant des
              sorciers, le <b>Daily Data'Venir</b> nous explique l'impact de ces
              Zones Humides sur l'environnement, en nous partageant des données
              de sa faune et de sa flore.
            </p>
          </span>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            Tuto rapide
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="corps">
            <Header className="articles-header">
              Les articles Tidmarsh...
            </Header>
            <div>
              <Grid
                style={{ marginBottom: 20 }}
                stackable
                textAlign="center"
                columns={3}
              >
                {TIDMARSH_UPDATES_DEVICES.map((device) => (
                  <Grid.Column>
                    <Header>{device?.title}</Header>
                    <Header.Subheader>Date</Header.Subheader>
                    <Link to={`/article/tidmarsh?deviceId=${device.id}`}>
                      <Image
                        className="article-img"
                        href="/article/tidmarsh"
                        src="./images/articles/article-1.png"
                      />
                    </Link>{" "}
                  </Grid.Column>
                ))}
              </Grid>
              <Link className="voir-plus" to="/kiosque">
                Voir plus
              </Link>
            </div>
            <Header className="articles-header">
              Les derniers articles ...
            </Header>
            <div>
              <Grid
                style={{ marginBottom: 20 }}
                stackable
                textAlign="center"
                columns={3}
              >
                <Grid.Column>
                  <Header>Titre</Header>
                  <Header.Subheader>Date</Header.Subheader>
                  <Link to="/article/tidmarsh">
                    <Image
                      className="article-img"
                      href="/article/tidmarsh"
                      src="./images/articles/article-1.png"
                    />
                  </Link>{" "}
                </Grid.Column>
                <Grid.Column>
                  <Header>Titre</Header>
                  <Header.Subheader>Date</Header.Subheader>
                  <Link to="/article/tidmarsh">
                    <Image
                      className="article-img"
                      href="/article/tidmarsh"
                      src="./images/articles/article-1.png"
                    />
                  </Link>{" "}
                </Grid.Column>
                <Grid.Column>
                  <Header>Titre</Header>
                  <Header.Subheader>Date</Header.Subheader>
                  <Link to="/article/tidmarsh">
                    <Image
                      className="article-img"
                      href="/article/tidmarsh"
                      src="./images/articles/article-1.png"
                    />
                  </Link>
                </Grid.Column>
              </Grid>
              <Link className="voir-plus" to="/kiosque">
                Voir plus
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Accueil;
