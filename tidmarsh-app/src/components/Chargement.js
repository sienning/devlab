import React from 'react';
import { Loader } from 'semantic-ui-react';


const Chargement = ({ texte }) => {
    return(
        <div>
            <Loader active inline='centered'>{texte}</Loader>
        </div>
    );
}

export default Chargement;