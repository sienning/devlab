import React, { useState, useEffect } from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'

function HeaderDaily({ temperature, humidity, pressure }) {
    const [temperatureData, setTemperatureData] = useState(temperature);
    const [humidityData, setHumidityData] = useState(humidity);
    const [pressureData, setPressureData] = useState(pressure);

    return (
        <div className="header">
            <Grid stackable columns={3} divided className="texte">
                <Grid.Column width={3}>
                    {/* JEU CONCOURS */}
                    <span className="titre4 mini-titre">Jeu concours</span><br/>
                    À gagner +3% d’humidité sur la zone humide est de Tidmarsh soit <span className="titre2 mini-titre">{humidityData.value}{humidityData.unit}</span><span className="titre3 mini-titre"> + 3%</span>
                    <br/>L’équivalent du gain en humidité des  19 derniers mois sur cette zone !
                </Grid.Column>
                <Grid.Column width={4}>
                    {/* METEO */}
                    <span className="titre3 mini-titre">Météo du jour</span><br/>
                    {/* <span className="titre2 mini-titre">Aujourd'hui :  {Math.floor(temperatureData[temperatureData.length-1].mean)}°C </span><Icon loading name="sun" /><br/><br/> */}
                    {/* <span className="titre2 mini-titre">24/10/2020 :  {Math.floor(temperatureData[temperatureData.length-2].mean)}°C </span><Icon name="tint" /><br/><br/> */}
                    {/* <span className="titre2 mini-titre">25/10/2020 :  {Math.floor(temperatureData[temperatureData.length-3].mean)}°C </span><Icon loading name="sun" /> */}
                </Grid.Column>

                <Grid.Column width={8}><span className="titre2 mini-titre">Signe astrologique</span><br/>
                    {/* SIGNE ASTROLOGIQUE */}
                    <Grid columns={2} style={{ marginTop : "-20px" }}>
                        <Grid.Column width={2}>
                            <Image src="../images/grenouille.png" width={30} />
                        </Grid.Column>
                        <Grid.Column width={14}>
                            Recru descence chez les grenouilles, vous semblez être fait pour rencontrer l’âme soeur ! +10% de présence depuis 30 jours.                                
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} style={{ marginTop : "-28px" }}>
                        <Grid.Column width={2}>
                            <Image src="../images/cerf.png" width={30} /> 
                        </Grid.Column>
                        <Grid.Column width={14} >
                            Il n’y a pas foule chez les cerfs, soyez plus ambicieux et n’hésitez pas à parcourir vos terres : -15% de présence de cerf dans la zone depuis 30 jours.
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} style={{ marginTop : "-28px" }}>
                        <Grid.Column width={2}>
                            <Image src="../images/papillion.png" width={30} />
                        </Grid.Column>
                        <Grid.Column width={14}>
                            Pour les papillons, il est temps de prendre votre envole et de vous reprendre en main, ne vous laissez pas surprendre par les araignées -10% de papillons de présence depuis 30 jours.
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default HeaderDaily;
