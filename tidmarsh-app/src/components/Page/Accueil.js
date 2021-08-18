import React, { useState } from "react";
import { Container, Divider, Grid, Header, Image, Select } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TIDMARSH_UPDATES_DEVICES } from "../../utils/api";
import dayjs from "dayjs";
require("dayjs/locale/fr");

const Accueil = () => {
  const [deviceId, setDeviceId] = useState(TIDMARSH_UPDATES_DEVICES[0]?.id);

  const getSevenLastDays = () => {
    const today = dayjs();
    return [...Array(7)].map((_, index) => today.subtract(index + 1, "day"));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const sevenLastDays = getSevenLastDays();
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
            Le site du Daily Data'Venir !
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
            Découvrez le monde des Zones Humides avec l'univers d'Harry Potter !
            Inspiré du Daily Prophet, le fameux journal mouvant des sorciers, le{" "}
            <b>Daily Data'Venir</b> nous explique l'impact de ces Zones Humides
            sur l'environnement, en nous partageant des données de sa faune et
            de sa flore.
          </p>
        </span>
        <br />
        <br />
        <br />
        <Grid columns={2}>
          <Grid.Column>
            <Image src="/images/découverte-1.gif" size="large" />
          </Grid.Column>
          <Grid.Column>
            <p>
              Passez la souris dans les moindres recoins pour découvrir le Daily Data'Venir.
            </p>
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <Grid columns={2}>
          <Grid.Column>
            <p>
              Attention ! Certains éléments ne sont là que pour vous piéger...
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/découverte-2.gif" size="large" />
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <Grid columns={2}>
          <Grid.Column>
            <Image src="/images/découverte-3.gif" size="large" />
          </Grid.Column>
          <Grid.Column>
            <p>
              D'autres vous permettent de découvrir des informations importantes sur les Zone Humides !
            </p>
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Divider />
        <div className="corps" style={{ paddingBottom: 20 }}>
          <div>
            <Header as="h4" className="ui label">
              Capteur
            </Header>
            <Select
              value={deviceId}
              onChange={(_, component) => setDeviceId(component?.value)}
              options={TIDMARSH_UPDATES_DEVICES?.map((device) => ({
                text: device?.title,
                value: device?.id,
              }))}
            />
          </div>
          <div>
            <Grid
              style={{ marginBottom: 20 }}
              stackable
              textAlign="center"
              columns={3}
            >
              {
                sevenLastDays.map((day) => (
                  <Grid.Column style={{ marginBottom: 20 }}>
                    <Header>
                      {capitalizeFirstLetter(
                        day?.locale("fr")?.format("dddd D MMMM YYYY")
                      )}
                    </Header>
                    <Link
                      to={`/article/article2?deviceId=${deviceId}&date=${day?.format(
                        "YYYY-MM-DD"
                      )}`}
                    >
                      <Image
                        className="article-img"
                        href="/article/tidmarsh"
                        size="medium"
                        src={`./images/articles/galerie-${Math.floor(Math.random() * 5 + 1)}.png`}
                      />
                    </Link>
                    <Link
                      to={`/article/tidmarsh?deviceId=${deviceId}&date=${day?.format(
                        "YYYY-MM-DD"
                      )}`}
                    >
                      <Image
                        className="article-img"
                        href="/article/tidmarsh"
                        size="medium"
                        src={`./images/articles/galerie-${Math.floor(Math.random() * 5 + 1)}.png`}
                      />
                    </Link>
                  </Grid.Column>
                ))
              }
            </Grid>
            <Link className="voir-plus" to="/kiosque">
              Voir plus
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Accueil;
