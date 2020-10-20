import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import Chargement from './Chargement';

const Article1 = () => {
    return(
        <div>
            <Grid columns={3} divided>
                <Grid.Column> EX1 : Jeu concours </Grid.Column>
                <Grid.Column> EX2 : Météo </Grid.Column>
                <Grid.Column> EX3 : Signe astrologique </Grid.Column>
            </Grid>
            <Grid columns={3}>
                <Grid.Column width={4}><Image src="./images/exclusive.jpg" /></Grid.Column> 
                <Grid.Column width={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nzfefzzethataint news no moreostrud exercitatzefzion ul lamcef efzocarr yingt </Grid.Column>
                <Grid.Column width={9}>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.</Grid.Column>
            </Grid>
            <h1 className="titre1">GROS TITRE EXEMPLE</h1>

            <Grid>
                <Grid.Column width={4}>
                    <div><span className="titre-lettre" >P</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </Grid.Column>
                <Grid.Column width={3}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p><span className="titre-lettre" >H</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                </Grid.Column>
                <Grid.Column width={9}>
                <div><Image src="./images/zh-nb.png" /></div>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Article1;