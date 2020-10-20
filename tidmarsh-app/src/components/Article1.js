import React, { useState } from 'react';
import { Grid, Image, Modal } from 'semantic-ui-react';
// import Chargement from './Chargement';
import ModalArticle from './ModalArticle';

// const ModalArticle = ({ openArticle }) => {
//     const [open, setOpen] = useState(false)

//     return (
//         <Modal
//             closeIcon
//             open={open}
//             onClose={() => setOpen(false)}
//             onOpen={() => setOpen(true)}
//         >
//             {console.log("openArticle", openArticle)}
//             {console.log("open", open)}
//             <Header icon='archive' content='Archive Old Messages' />
//             <Modal.Content>
//                 <p>
//                     Your inbox is getting full, would you like us to enable automatic
//                     archiving of old messages?
//                 </p>
//             </Modal.Content>
            
//         </Modal>
//     );
// }


const Article1 = () => {
    const [texte1, setTexte1] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

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
                <h1 className="titre1">FOCUS SUR LES ZONES HUMIDES - GRANDE ÉDITION !</h1>

            <Grid>
                <Grid.Column width={2}>
                    <span className="titre-lettre">P</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                </Grid.Column>
                <Grid.Column width={3}>
                    
                    <ModalArticle texteArticle={texte1} />
          
          
                </Grid.Column>
                <Grid.Column width={3}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="titre-lettre">H</div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div><Image src="./images/zh-nb.png"/></div>
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