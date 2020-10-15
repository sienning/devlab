import React from 'react';
import { Loader } from 'semantic-ui-react';


const Chargement = ({ text }) => {
    return(
        <Loader active inline='centered'>{text}</Loader>
    );
}

export default Chargement;