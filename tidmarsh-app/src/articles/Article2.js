import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import ModalArticle from "./ModalArticle";
import articlesJSON from "../articles.json";
import Chargement from "../components/Chargement";
import Chart from "../charts/HumidityTemperatureChart";
import Histo from "../charts/WhiteLightChart";
import ModalImage from "./ModalImage";
import ModalPapillon from "./ModalPapillon";
import HeaderDaily from "../components/HeaderDaily";
import { findSensor } from "./articles.service";
import { useDevice } from "../utils/api";
import { useLocation } from "react-router";
import dayjs from "dayjs";
import { getMidnightTimestamp, useSensorData } from "../charts/charts.service";
import ModalImageArticle from "./ModalImageArticle";

const Article2 = () => {
  const location = useLocation();
  const deviceId = location?.search.split("deviceId=")[1].split("&")[0] || 25941;
  const date = dayjs(location?.search.split("date=")[1], "YYYY-MM-DD") || dayjs();
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
            src="../images/daily/papillon.png"
            className="heron-img"
            alt="papillon"
          />
          {open ? <ModalPapillon /> : null}
          <div className="border-article">
            <Grid stackable>
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
              L'appel de la nature
            </h1>
            <h1 className="titre6">
              Scoop :{" "}
              <span className="titre7 mini-titre">
                L'apparition d'un héron sauvage fait sensation !
              </span>
            </h1>




            <Grid stackable columns={3}>
              <Grid.Column width={5}>
                <ModalImage
                  srcImage="../images/champignons.gif"
                  animation="bounce"
                />
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{ width: "100%", marginTop: "3px" }}
                />
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
                {texte[5]}
                <Image
                  style={{ marginTop: "10px", margin: "auto" }}
                  src="../images/barre-2-HP.jpg"
                />
                <div style={{ marginTop: "50px" }} className="titre-lettre">ZH</div>

              </Grid.Column>
              <Grid.Column width={5}>
                <div className="titre2 mini-titre">
                  De plus en plus rares
                </div>
                <p>
                  {texte[9]}
                  {texte[10]}
                </p>
                <div id="modal-article">
                  <ModalArticle
                    texteArticle={texte[6]}
                    headerArticle={articles[7].titre}
                    contenuArticle={articles[7].contenu}
                    animation="bounce"
                  />
                </div>
                <p>
                  {texte[16]}
                  {texte[5]}
                </p>
              </Grid.Column>
              <Grid.Column width={5}>

                <ModalImageArticle srcImage="../images/texte.gif" headerArticle={articles[4].titre} contenuArticle={articles[4].contenu} />
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{ width: "100%", marginTop: "3px" }}
                />
                {texte[5]}
                <p className="article heron" onClick={toggleHeron}> {texte[8]} </p>

              </Grid.Column>
            </Grid>




            <Grid stackable>
              <Grid.Column width={2}>
                <p>{texte[9]}</p>
                <Image
                  style={{ marginTop: "10px" }}
                  src="../images/barre-2-HP.jpg"
                />
                <p className="article heron" onClick={toggleHeron}> {texte[11]} </p>
                <p> {texte[14]} </p>
                <p> {texte[9]} </p>

              </Grid.Column>

              <Grid.Column width={4}>
                <div
                  className="animate__animated titre2 mini-titre article"
                  id="test"
                >
                  <a style={{ color: "black" }} target="_blank" href="https://www.gers.gouv.fr/Politiques-publiques/Environnement/Gestion-de-l-eau/Eau-et-biodiversite-jardins-especes-protegees-zones-humides-Natura-2000/L-importance-des-zones-humides">Zones Humides en France</a>
                </div>
                <p> {texte[10]} </p>
                <ModalImage srcImage="../images/mycorhize.gif" animation="swing" />
                
                <p> {texte[10]} </p>

              </Grid.Column>

              <Grid.Column width={10}>
                <Image
                  style={{ marginTop: "10px" }}
                  src="../images/barre-2-HP.jpg"
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
                <p> {texte[13]} </p>
              </Grid.Column>
            </Grid>


            <Grid>
              <Grid.Column width={10}>
                <p>
                  {texte[11]}
                  {texte[12]}
                </p>
                <p className="article heron" onClick={toggleHeron}> {texte[8]} </p>

                <ModalArticle
                  texteArticle={texte[10]}
                  headerArticle={articles[3].titre}
                  contenuArticle={articles[3].contenu}
                  animation="flash"
                />
                <p>{texte[13]}</p>
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{ width: "100%", marginTop: "3px" }}
                />
                <h3 className="titre2">{articles[4].titre}</h3>
                <ModalArticle
                  texteArticle={texte[14] + texte[5]}
                  headerArticle={articles[4].titre}
                  contenuArticle={articles[4].contenu}
                  animation="tada"
                />
                <p> {texte[3]} </p>

                <h1 className="titre2">
                  {dayjs(date, "YYYY-MM-DD")?.format("DD/MM/YYYY")}
                </h1>
              </Grid.Column>

              <Grid.Column width={1}>
                <h1 className="titre2">
                  <span className="titre-vertical">{articles[6].titre}</span>
                </h1>
              </Grid.Column>
              <Grid.Column width={5}>
                <Image
                  src="../images/daily/heron1.png"
                />
                <p> {texte[2]} </p>
                <Image
                  src="../images/barre-3-HP.jpg"
                  style={{
                    width: "100%",
                    marginTop: "3px",
                    marginBottom: "6px",
                  }}
                />
              </Grid.Column>
            </Grid>



            <Grid>
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

                  <span className="titre-vertical">C'est le moment d'agir</span>
                </h1>
              </Grid.Column>

              <Grid.Column width={3}>
                <p>{texte[17]}{texte[15]}</p>

                <Image
                  style={{ marginTop: "10px" }}
                  src="../images/barre-HP.jpg"
                />

                <h1 className="titre2">Tidmarsh</h1>
                <ModalArticle
                  texteArticle={texte[16]}
                  headerArticle={articles[5].titre}
                  contenuArticle={articles[5].contenu}
                  animation="shakeX"
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <Image
                  src="../images/daily/quenouille.png"
                />
                <ModalArticle
                  texteArticle={texte[14]}
                  headerArticle={articles[4].titre}
                  contenuArticle={articles[4].contenu}
                  animation="shakeY"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <span
                    className="titre-lettre article animate__animated"
                    onClick={toggleBounceOut}
                  >
                    D
                  </span>
                  <span
                    className="titre3 mini-titre"
                    style={{ marginLeft: "-10px" }}
                  >
                    anger en approche
                  </span>
                </div>
                <ModalArticle
                  texteArticle={texte[11]}
                  headerArticle={articles[4].titre}
                  contenuArticle={articles[4].contenu}
                  animation="shakeY"
                />
                <Image src="../images/barre-2-HP.jpg" />
                <Image src="../images/daily/planteaquatique.png" />

                <p>{texte[15]}</p>
              </Grid.Column>
            </Grid>
          </div>
        </div >
      )
      }
    </div >
  );
};

export default Article2;
