import React from 'react';
import { Loader } from 'semantic-ui-react';


const Chargement = ({ texte }) => {
    return(
        <Loader active inline='centered'>{texte}</Loader>
    );
}

export default Chargement;