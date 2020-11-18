import React, { useState } from 'react';
<<<<<<< HEAD
import { Grid, Image, Embed } from 'semantic-ui-react';
=======
import { Grid, Image, Icon, Embed } from 'semantic-ui-react';
>>>>>>> 044e9cf1bbb61dc87d5f6248b501c3491ccff6ed
import ModalArticle from './ModalArticle';
import articlesJSON from '../articles.json';
import Chargement from './Chargement';
import Chart from './HumidityTemperatureChart';
import Histo from './WhiteLightChart';
import ModalImage from './ModalImage';

const Article1 = ({ isLoading, temperature, humidity, pressure }) => {
    const [texte, setTexte] = useState(articlesJSON.fakeArticles);
    const [articles, setArticles] = useState(articlesJSON.articles);
    
    return(
        <div>
            {
                isLoading ?
                <Chargement/> : 
                <div>
                    <div className="border-article">
                        <Grid stackable columns={3}>
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
                        <Grid stackable>
                            <Grid.Column width={3}>
                                <div><span className="titre-lettre">P</span><span className="titre3 mini-titre" style={{ marginLeft : '-30px' }}>roblème d'envergure</span></div>
                                <ModalArticle texteArticle={texte[0]} headerArticle={articles[0].titre} contenuArticle={articles[0].contenu}/>
                                <Image src="./images/barre-2-HP.jpg"/>
                                {texte[4]}
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
                                <ModalImage srcImage="./images/zh-nb.png" />
                                <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px" }} />
<<<<<<< HEAD
                                <Embed
                                    id="b60f3d6d-01a3-4cf6-a5c1-0cb1bdc0f0c1"
                                    // autoplay
                                    placeholder="./images/zh-nb.png"
                                    source="blob:https://tidmarsh.media.mit.edu/"
                                />
                                <video width="320" height="240" autoPlay>
                                    {/* <source src="blob:https://tidmarsh.media.mit.edu/b60f3d6d-01a3-4cf6-a5c1-0cb1bdc0f0c1"/> */}
                                    <source src="https://www.youtube.com/watch?v=HTZudKi36bo" type="video"></source>
                                </video>
                                <iframe width="420" height="315" autoPlay
                                    src="https://tidmarsh.media.mit.edu/b60f3d6d-01a3-4cf6-a5c1-0cb1bdc0f0c1">
                                </iframe>
=======
                                
>>>>>>> 044e9cf1bbb61dc87d5f6248b501c3491ccff6ed
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Grid.Column>
                        </Grid>
                        <Grid stackable>
                            <Grid.Column width={1}>
                                <h1 className="titre2 padding-300"><span className="titre-vertical">{articles[4].titre}</span></h1>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div className="titre2 mini-titre">The Daily Data'Venir</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Grid columns={3}>
                                    <Grid.Column width={5}>
                                        <Image style={{ marginTop: "10px" }} src="./images/barre-2-HP.jpg" />
                                        <div className="titre-lettre">t</div>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Grid.Column>
                                </Grid>
                                <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px",  marginBottom : "6px" }} />
                                <Chart/>
                                <Histo/>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <h1 className="titre2"><Image src="./images/main-droite.jpg" style={{ display : 'inline', transform : "rotate(90deg)", marginRight : "30px" }} /><span className="titre-vertical" >Une terre survoltée</span></h1>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <ModalImage srcImage="./images/zh-hum.jpg" />
                                

                                <ModalArticle texteArticle={texte[3]} headerArticle={articles[3].titre} contenuArticle={articles[3].contenu} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px" }} />
                                <h1 className='titre3'></h1>
                                <ModalArticle texteArticle={texte[4]+texte[5]} headerArticle={articles[4].titre} contenuArticle={articles[4].contenu} />
                                {texte[5]}
                                <h1 className="titre2">23/10/2020</h1>
                            </Grid.Column>
                        </Grid>
                        {/* <h1 className="titre2">GROS TITRE EXEMPLE 3</h1> */}
                    </div>
                </div>
            }
        </div>
    );
}

export default Article1;