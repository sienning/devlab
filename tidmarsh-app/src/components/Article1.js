import React, { useState } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
import ModalArticle from './ModalArticle';
import articlesJSON from '../articles.json';
import Chargement from './Chargement';
import Chart from './HumidityTemperatureChart'

const Article1 = ({ isLoading, temperature, humidity, pressure }) => {
    const [texte, setTexte] = useState(articlesJSON.fakeArticles);
    const [articles, setArticles] = useState(articlesJSON.articles);
    const [temperatureData, setTemperatureData] = useState(temperature);
    const [humidityData, setHumidityData] = useState(humidity);
    const [pressureData, setPressureData] = useState(pressure);

    return(
        <div>
            {
                isLoading ?
                <Chargement/> : 
                <div>
                    <div className="header">
                        <Grid columns={3} divided className="texte">
                            <Grid.Column>
                                {/* JEU CONCOURS */}
                                <div>
                                    <span className="titre4 mini-titre">Jeu concours</span><br/>
                                    À gagner +3% d’humidité sur la zone humide est de Tidmarsh soit <span className="titre2 mini-titre">{humidityData.value}{humidityData.unit}</span><span className="titre3 mini-titre"> + 3%</span>
                                    <br/>L’équivalent du gain en humidité des  19 derniers mois sur cette zone !

                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                {/* METEO */}
                                <span className="titre3 mini-titre">Météo du jour</span><br/><br/>
                                <span className="titre2 mini-titre">Aujourd'hui :  {temperatureData[0].value}°C </span><Icon loading name="sun" /><br/><br/>
                                <span className="titre2 mini-titre">24/10/2020 :  {temperatureData[1].value}°C </span><Icon loading name="sun" /><br/><br/>
                                <span className="titre2 mini-titre">25/10/2020 :  {temperatureData[2].value}°C </span><Icon loading name="sun" />

                            </Grid.Column>

                            <Grid.Column><span className="titre2 mini-titre">Signe astrologique</span><br/>
                                {/* SIGNE ASTROLOGIQUE */}
                                <Grid columns={2}>
                                    <Grid.Column width={2}>
                                        <Image src="../images/grenouille.png" width={30} />
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        Recru descence chez les grenouilles, vous semblez être fait pour rencontrer l’âme soeur ! +10% de présence depuis 30 jours.                                
                                    </Grid.Column>
                                </Grid>
                                <Grid columns={2}>
                                    <Grid.Column width={2}>
                                        <Image src="../images/cerf.png" width={30} /> 
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        Il n’y a pas foule chez les cerfs, soyez plus ambicieux et n’hésitez pas à parcourir vos terres : -15% de présences de cerf dans la zone depuis 30 jours.
                                    </Grid.Column>
                                </Grid>
                                <Grid columns={2}>
                                    <Grid.Column width={2}>
                                        <Image src="../images/papillion.png" width={30} />
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        Pour les papillons, il est temps de prendre votre envole et de vous reprendre en main, ne vous laissez pas surprendre par les araignées -10% de papillons de présence depuis 30 jours.
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </div>

                    <div className="border-article">
                        <Grid columns={3}>
                            <Grid.Column width={4}><Image src="./images/exclusive.jpg" style={{ marginTop: '6px' }} />
                            </Grid.Column>
                            <Grid.Column width={5} className="texte">
                                Tidmarsh, propriété de 600 hectare dans le Massachusetts a été pendant plus d'un siècle une grande ferme de canneberges. Transformée ensuite en zone humide, c’est maintenant le sanctuaire de la faune de Mass Audubon Tidmarsh.
                            </Grid.Column>
                            <Grid.Column width={7} className="texte">
                                Les chercheurs du groupe Environnements réactifs du Media Lab ont développé des réseaux de capteurs pour documenter les processus écologiques à différentes échelles : spatiales et temporelles. De petits capteurs retranscrivent des informations sur le climat, le sol, l'eau et d'autres données environnementales, tandis que d'autres capteurs diffusent du son depuis le haut des arbres et sous l'eau.    
                            </Grid.Column>
                        </Grid>
                            <h1 className="titre1">Zone humide, milieu en danger !</h1>
                            <h1 className="titre7">Le dossier du mois : <span className="titre6 mini-titre">à la rencontre de l'écosystème tidmarsh massachussets</span></h1>
                        <Grid>
                            <Grid.Column width={3}>
                                <div><span className="titre-lettre">P</span><span className="titre3 mini-titre" style={{ marginLeft : '-30px' }}>roblème d'envergure</span></div>
                                <ModalArticle texteArticle={texte[0]} headerArticle={articles[0].titre} contenuArticle={articles[0].contenu}/>
                                <Image src="./images/barre-2-HP.jpg"/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h1 className="titre2">Wetland</h1>
                                <ModalArticle texteArticle={texte[1]} headerArticle={articles[1].titre} contenuArticle={articles[1].contenu} />
                                <Image style={{ marginTop: "10px" }} src="./images/barre-HP.jpg" />
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="titre2 mini-titre">Grands Lieux inquiétants ?</div>
                                <ModalArticle texteArticle={texte[4]} headerArticle={articles[2].titre} contenuArticle={articles[2].contenu} />

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src="./images/zh-nb.png"/>
                                <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px" }} />
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={1}>
                                <h1 className="titre2"><span className="titre-vertical">DAILY PROPHET</span></h1>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div className="titre2 mini-titre">Grands <span className="titre-lettre">L</span>ieux inquiétants ?</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <ModalArticle texteArticle={texte[2]} headerArticle={articles[2].titre} contenuArticle={articles[2].contenu} />
                                <ModalArticle texteArticle={texte[3]} headerArticle={articles[3].titre} contenuArticle={articles[3].contenu} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <ModalArticle texteArticle={texte[4]} headerArticle={articles[4].titre} contenuArticle={articles[4].contenu} />
                                <Grid columns={5}>
                                    <Grid.Column width={3}>
                                        <Image style={{ marginTop: "10px" }} src="./images/barre-HP.jpg" />
                                        <div className="titre-lettre">t</div>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                </Grid>

                            </Grid.Column>
                            <Grid.Column width={1}>
                                <h1 className="titre2"><span className="titre-vertical">DAILY PROPHET</span></h1>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <Chart/>
                                <ModalArticle texteArticle={texte[4]} headerArticle={articles[4].titre} contenuArticle={articles[4].contenu} />
                                <h1 className='titre3'>TITRE EXEMPLE</h1>
                            </Grid.Column>
                        </Grid>
                        <h1 className="titre2">GROS TITRE EXEMPLE 3</h1>
                    </div>
                </div>
            }
        </div>
    );
}

export default Article1;