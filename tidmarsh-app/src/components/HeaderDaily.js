import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

const HeaderDaily = ({ temperature, humidity, pressure }) => {
  return (
    <div className="header">
      <Grid stackable columns={3} divided className="texte">
        <Grid.Column width={3}>
          {/* JEU CONCOURS */}
          <span className="titre4 mini-titre">Jeu concours</span>
          <br />
          <div className="mini-titre animate__animated animate__rubberBand animate__infinite">
            <strong>{humidity?.value}</strong>
            {humidity?.unit} d’humidité sur la zone humide est de Tidmarsh
          </div>
          <span className="mini-titre">
            {humidity?.value}
            {humidity?.unit}
          </span>
          <span className="mini-titre"> + 3%</span>
          <br />
          L’équivalent du gain en humidité des 19 derniers mois sur cette zone !
        </Grid.Column>
        <Grid.Column width={4}>
          {/* METEO */}
          <div className="animate__animated animate__tada animate__infinite">
            <span className="titre3 mini-titre">Météo du jour</span>
            <br />
            <Icon loading name="sun" />
            <span className="titre2 mini-titre">
              {temperature?.value} {temperature?.unit}{" "}
            </span>
            <br />
            <Icon loading name="long arrow alternate down" />
            <span className="titre2 mini-titre">
              {pressure?.value} {pressure?.unit}{" "}
            </span>
          </div>
        </Grid.Column>

        <Grid.Column width={8}>
          <span className="titre2 mini-titre">Signe astrologique</span>
          <br />
          {/* SIGNE ASTROLOGIQUE */}
          <Grid columns={2} style={{ marginTop: "-20px" }}>
            <Grid.Column
              width={2}
              className="animate__animated animate__wobble animate__infinite"
            >
              <Image src="../images/grenouille.png" width={30} />
            </Grid.Column>
            <Grid.Column width={14}>
              Recru descence chez les grenouilles, vous semblez être fait pour
              rencontrer l’âme soeur ! +10% de présence depuis 30 jours.
            </Grid.Column>
          </Grid>
          <Grid columns={2} style={{ marginTop: "-28px" }}>
            <Grid.Column
              width={2}
              className="animate__animated animate__headShake animate__infinite"
            >
              <Image src="../images/cerf.png" width={30} />
            </Grid.Column>
            <Grid.Column width={14}>
              Il n’y a pas foule chez les cerfs, soyez plus ambicieux et
              n’hésitez pas à parcourir vos terres : -15% de présence de cerf
              dans la zone depuis 30 jours.
            </Grid.Column>
          </Grid>
          <Grid columns={2} style={{ marginTop: "-28px" }}>
            <Grid.Column
              width={2}
              className="animate__animated animate__shakeX animate__infinite"
            >
              <Image src="../images/papillion.png" width={30} />
            </Grid.Column>
            <Grid.Column width={14}>
              Pour les papillons, il est temps de prendre votre envole et de
              vous reprendre en main, ne vous laissez pas surprendre par les
              araignées -10% de papillons de présence depuis 30 jours.
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default HeaderDaily;
