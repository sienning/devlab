import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import ModalArticle from "./ModalArticle";
import articlesJSON from "../articles.json";
import Chargement from "../components/Chargement";
import Chart from "../charts/HumidityTemperatureChart";
import Histo from "../charts/WhiteLightChart";
import ModalImage from "./ModalImage";
import ModalHeron from "./ModalHeron";
import HeaderDaily from "../components/HeaderDaily";
import { findSensor } from "./articles.service";
import { useDevice } from "../utils/api";
import { useLocation } from "react-router";
import dayjs from "dayjs";
import { getMidnightTimestamp, useSensorData } from "../charts/charts.service";

const ArticleTidmarsh = () => {
  const location = useLocation();
  const deviceId =
    +location?.search.split("deviceId=")[1].split("&")[0] || 25941;
  const date =
    dayjs(location?.search.split("date=")[1], "YYYY-MM-DD") || dayjs();
  const texte = articlesJSON.fakeArticles;
  const articles = articlesJSON.articles;
  const [open, setOpen] = useState(false);

  const toggleWobble = (e) => {
    e.currentTarget.classList.add("animate__wobble");
    rmToggle(e.currentTarget, "animate__wobble");
  };
  const toggleShakeY = (e) => {
    e.currentTarget.classList.add("animate__shakeY");
    rmToggle(e.currentTarget, "animate__shakeY");
  };
  const toggleFlash = (e) => {
    e.currentTarget.classList.add("animate__flash");
    // rmToggle(e.currentTarget, "animate__flash");
  };
  const toggleBounceOut = (e) => {
    e.currentTarget.classList.add("animate__bounceOutDown");
    toggleComeback(e.currentTarget, "animate__bounceOutDown");
  };

  // -------------------------------------
  const rmToggle = (ect, animateType) => {
    setTimeout(() => ect.classList.remove(animateType), 1400);
  };
  const toggleComeback = (ect, animateType) => {
    ect.classList.add("animate__fadeIn", "animate__delay-3s");
    setTimeout(
      () =>
        ect.classList.remove(
          animateType,
          "animate__fadeIn",
          "animate__delay-3s"
        ),
      4000
    );
  };

  // -------------------------------------
  const toggleHeron = () => {
    let idHeron = document.getElementById("heron-img");
    let leftPos = 0;
    let bottomPos = -900;
    setOpen(false);

    idHeron.style.display = "block";

    var interval = setInterval(() => {
      if (leftPos < 2000 && bottomPos < 2000) {
        leftPos = leftPos + 7;
        bottomPos = bottomPos + 7;
        idHeron.style.left = leftPos + "px";
        idHeron.style.bottom = bottomPos + "px";
      } else {
        clearInterval(interval);
        setOpen(true);
        idHeron.style.left = 0 + "px";
        idHeron.style.bottom = -900 + "px";
        idHeron.style.display = "none";
      }
    }, 0.0001);
  };

  // DATAS

  const getAverageData = (array) =>
    array?.data
      ?.reduce((avg, value, _, { length }) => {
        return avg + value?.y / length;
      }, 0)
      .toFixed(2);

  const from = date.subtract(1, "day").subtract(1, "year");
  const to = date.subtract(1, "year");

  const { getSensors } = useDevice(deviceId);
  const sensors = getSensors({ enabled: !!deviceId });

  const temperatureSensor = findSensor(sensors, "temperature");

  const { data: temperatures, isLoading: isLoadingTemperature } = useSensorData(
    temperatureSensor?.id,
    {
      timestamp__gte: getMidnightTimestamp(from),
      timestamp__lt: getMidnightTimestamp(to),
    },
    { enabled: !!temperatureSensor }
  );
  const averageTemperature = getAverageData(temperatures);

  const humiditySensor = findSensor(sensors, "humidity");
  const { data: humidities, isLoading: isLoadingHumidity } = useSensorData(
    humiditySensor?.id,
    {
      timestamp__gte: getMidnightTimestamp(from),
      timestamp__lt: getMidnightTimestamp(to),
    },
    {
      enabled: !!humiditySensor,
    }
  );
  const averageHumidity = getAverageData(humidities);

  const pressureSensor = findSensor(sensors, "pressure");
  const { data: pressures, isLoading: isLoadingPressure } = useSensorData(
    pressureSensor?.id,
    {
      timestamp__gte: getMidnightTimestamp(from),
      timestamp__lt: getMidnightTimestamp(to),
    },
    {
      enabled: !!pressureSensor,
    }
  );
  const averagePressure = getAverageData(pressures);

  const isLoading =
    isLoadingTemperature | isLoadingHumidity | isLoadingPressure;

  const whiteLightSensor = findSensor(sensors, "light_white");

  return (
    <div>
      {isLoading ? (
        <Chargement />
      ) : (
        <div>
          <HeaderDaily
            temperature={{ value: averageTemperature, unit: "°C" }}
            humidity={{ value: averageHumidity, unit: "%" }}
            pressure={{ value: averagePressure, unit: "hPa" }}
          />
          <img
            id="heron-img"
            src="../images/heron.svg"
            className="heron-img"
            alt="heron"
          />
          {open ? <ModalHeron /> : null}
          <div className="border-article">
            <Grid stackable columns={3}>
              <Grid.Column width={4}>
                <Image
                  src="../images/exclusive.jpg"
                  style={{ marginTop: "6px" }}
                />
                <Image
                  src="../images/mit-logo.gif"
                  style={{ maxWidth: "245px" }}
                />
              </Grid.Column>
              <Grid.Column width={5} className="texte ">
                Tidmarsh, propriété de 600 hectare dans le Massachusetts a été
                pendant plus d'un siècle une grande ferme de canneberges.
                Transformée ensuite en zone humide, c’est maintenant le
                sanctuaire de la faune de Mass Audubon Tidmarsh.
              </Grid.Column>
              <Grid.Column width={7} className="texte">
                Les chercheurs du groupe Environnements réactifs du Media Lab
                ont développé des réseaux de capteurs pour documenter les
                processus écologiques à différentes échelles : spatiales et
                temporelles. De petits capteurs retranscrivent des informations
                sur le climat, le sol, l'eau et d'autres données
                environnementales, tandis que d'autres capteurs diffusent du son
                depuis le haut des arbres et sous l'eau.
              </Grid.Column>
            </Grid>
            <h1 className="titre1 animate__animated animate__tada animate__infinite">
              Zone humide, milieu en danger !
            </h1>
            <h1 className="titre7">
              Le dossier du mois :{" "}
              <span className="titre6 mini-titre">
                à la rencontre de l'écosystème tidmarsh massachussets
              </span>
            </h1>
            <Grid stackable>
              <Grid.Column width={3}>
                <div>
                  <span
                    className="titre-lettre article animate__animated"
                    onClick={toggleBounceOut}
                  >
                    P
                  </span>
                  <span
                    className="titre3 mini-titre"
                    style={{ marginLeft: "-30px" }}
                  >
                    roblème d'envergure
                  </span>
                </div>
                <ModalArticle
                  texteArticle={texte[0]}
                  headerArticle={articles[0].titre}
                  contenuArticle={articles[0].contenu}
                  animation="shakeY"
                />
                <Image src="../images/barre-2-HP.jpg" />
                <span>{texte[4]}</span>
              </Grid.Column>
              <Grid.Column width={3}>
                <h1 className="titre2">Wetland</h1>
                <ModalArticle
                  texteArticle={texte[1]}
                  headerArticle={articles[1].titre}
                  contenuArticle={articles[1].contenu}
                  animation="shakeX"
                />
                <Image
                  style={{ marginTop: "10px" }}
                  src="../images/barre-HP.jpg"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Grid.Column>
              <Grid.Column width={2}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="titre2 mini-titre">
                  Grands Lieux inquiétants ?
                </div>
                <div id="modal-article">
                  <ModalArticle
                    texteArticle={texte[4]}
                    headerArticle={articles[2].titre}
                    contenuArticle={articles[2].contenu}
                    animation="swing"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <ModalImage srcImage="../images/zh-nb.png" />
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{ width: "100%", marginTop: "3px" }}
                />
                {/* <video width="320" height="240" autoPlay> */}
                {/* <source src="blob:https://tidmarsh.media.mit.edu/b60f3d6d-01a3-4cf6-a5c1-0cb1bdc0f0c1"/> */}
                {/* <source src="https://www.youtube.com/watch?v=HTZudKi36bo" type="video"></source> */}
                {/* </video> */}
                {/* <iframe width="420" height="315" autoPlay
                                    src="https://tidmarsh.media.mit.edu/b60f3d6d-01a3-4cf6-a5c1-0cb1bdc0f0c1">
                                </iframe> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </Grid.Column>
            </Grid>
            <Grid stackable>
              <Grid.Column width={1}>
                <h1 className="titre2 padding-300">
                  <span className="titre-vertical">{articles[4].titre}</span>
                </h1>
              </Grid.Column>
              <Grid.Column width={6}>
                <div
                  className="animate__animated titre2 mini-titre article"
                  id="test"
                >
                  The Daily Data'Venir
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="article heron" onClick={toggleHeron}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <Grid columns={3}>
                  <Grid.Column width={5}>
                    <Image
                      style={{ marginTop: "10px" }}
                      src="../images/barre-2-HP.jpg"
                    />
                    <div className="titre-lettre">t</div>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Grid.Column>
                </Grid>
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{
                    width: "100%",
                    marginTop: "3px",
                    marginBottom: "6px",
                  }}
                />
                <div className="animate__animated animate__pulse animate__infinite">
                  {humiditySensor && temperatureSensor && (
                    <Chart
                      humiditySensorId={humiditySensor?.id}
                      temperatureSensorId={temperatureSensor?.id}
                      from={from}
                      to={to}
                    />
                  )}
                  {whiteLightSensor && (
                    <Histo
                      whiteLightSensorId={whiteLightSensor?.id}
                      from={from}
                      to={to}
                    />
                  )}
                </div>
              </Grid.Column>
              <Grid.Column width={1}>
                <h1 className="titre2">
                  <Image
                    src="../images/main-droite.jpg"
                    style={{
                      display: "inline",
                      transform: "rotate(90deg)",
                      marginRight: "30px",
                    }}
                  />
                  <span className="titre-vertical">Une terre survoltée</span>
                </h1>
              </Grid.Column>
              <Grid.Column width={8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <ModalImage
                  srcImage="../images/zh-hum.jpg"
                  animation="bounce"
                />
                <ModalArticle
                  texteArticle={texte[3]}
                  headerArticle={articles[3].titre}
                  contenuArticle={articles[3].contenu}
                  animation="flash"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{ width: "100%", marginTop: "3px" }}
                />
                <h3 className="titre2">{articles[4].titre}</h3>
                <ModalArticle
                  texteArticle={texte[4] + texte[5]}
                  headerArticle={articles[4].titre}
                  contenuArticle={articles[4].contenu}
                  animation="tada"
                />
                {texte[5]}
                <h1 className="titre2">
                  {dayjs(date, "YYYY-MM-DD")?.format("DD/MM/YYYY")}
                </h1>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleTidmarsh;
