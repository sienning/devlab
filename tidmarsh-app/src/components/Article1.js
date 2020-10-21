import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
// import Chargement from './Chargement';
import ModalArticle from './ModalArticle';

const Article1 = () => {
    const [texte1, setTexte1] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    return(
        <div>
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
                <h1 className="titre1">FOCUS SUR LES ZONES HUMIDES - GRANDE ÉDITION !</h1>

            <Grid>
                <Grid.Column width={2}>
                    <span className="titre-lettre">P</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <Image src="./images/barre-2-HP.jpg" />
                
                </Grid.Column>
                <Grid.Column width={3}>
                    
                    <ModalArticle texteArticle={texte1} />
                    <Image src="./images/barre-HP.jpg" />
                </Grid.Column>
                <Grid.Column width={3}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="titre-lettre">H</div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div><Image src="./images/zh-nb.png"/></div>
                    <Image src="./images/barre-3-HP.jpg" style={{ width : "100%", marginTop : "3px" }} />

                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column width={1}>
                    <h1 className="titre2"><span className="titre-vertical">DAILY PROPHET</span></h1>
                </Grid.Column>
                <Grid.Column width={15}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid.Column>
            </Grid>
            <h1 className="titre2">GROS TITRE EXEMPLE 3</h1>
        </div>
    );
}

export default Article1;