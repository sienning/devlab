import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
// import Chargement from './Chargement';
import ModalArticle from './ModalArticle';
import articlesJSON from '../articles.json';


const Article1 = () => {
    const [texte, setTexte] = useState(articlesJSON.fakeArticles);
    const [articles, setArticles] = useState(articlesJSON.articles);

    console.log(texte)

    return(
        <div className="border-article">
            <Grid columns={3} divided>
                <Grid.Column> <span>Jeu concours :</span> À gagner +3% d’humidité sur la zone humide est de Tidmarsh soit [mettre valeur exacte par rapport au data, faire évoluer par rapport à la date] </Grid.Column>
                <Grid.Column> EX2 : Météo </Grid.Column>
                <Grid.Column> EX3 : Signe astrologique </Grid.Column>
            </Grid>
            <Grid columns={3}>
                <Grid.Column width={4}><Image src="./images/exclusive.jpg" /></Grid.Column> 
                <Grid.Column width={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nzfefzzethataint news no moreostrud exercitatzefzion ul lamcef efzocarr yingt </Grid.Column>
                <Grid.Column width={9}>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.</Grid.Column>
            </Grid>
                <h1 className="titre1">Focus sur les zones humides - grande édition</h1>
            <Grid>
                <Grid.Column width={3}>
                    <span className="titre-lettre">P</span>
                    <ModalArticle texteArticle={texte[0]} headerArticle={articles[0].titre} contenuArticle={articles[0].contenu}/>
                    <Image src="./images/barre-2-HP.jpg" />
                
                </Grid.Column>
                <Grid.Column width={3}>
                    <h1 className="titre2">Titre</h1>
                    <ModalArticle texteArticle={texte[1]} headerArticle={articles[1].titre} contenuArticle={articles[1].contenu} />
                    <Image style={{ marginTop: "10px" }} src="./images/barre-HP.jpg" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Grid.Column>
                <Grid.Column width={2}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="titre-lettre">H</div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Image src="./images/zh-nb.png"/>
                    <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px" }} />
                
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column width={1}>
                    <h1 className="titre2"><span className="titre-vertical">DAILY PROPHET</span></h1>
                </Grid.Column>
                <Grid.Column width={10}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ModalArticle texteArticle={texte[2]} headerArticle={articles[2].titre} contenuArticle={articles[2].contenu} />
                    <ModalArticle texteArticle={texte[3]} headerArticle={articles[3].titre} contenuArticle={articles[3].contenu} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ModalArticle texteArticle={texte[4]} headerArticle={articles[4].titre} contenuArticle={articles[4].contenu} />
                    <Grid columns={4}>
                        <Grid.Column width={4}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Grid.Column>
                    </Grid>

                </Grid.Column>
                <Grid.Column width={1}>
                    <h1 className="titre2"><span className="titre-vertical">DAILY PROPHET</span></h1>

                </Grid.Column>
                <Grid.Column width={4}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Grid.Column>
            </Grid>
            <h1 className="titre2">GROS TITRE EXEMPLE 3</h1>
        </div>
    );
}

export default Article1;