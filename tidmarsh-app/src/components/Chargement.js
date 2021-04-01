import React from 'react';
import { Loader } from 'semantic-ui-react';


const Chargement = ({ texte }) => {
    return(
        <div style={{ height: "100%", verticalAlign: "middle" }}>
            <Loader active inline='centered' style={{ fontSize: "30px" }}>{texte}</Loader>
        </div>
    );
}

export default Chargement;