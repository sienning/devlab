import React, { useState } from 'react';
import Chargement from './Chargement';
import { Image } from 'semantic-ui-react'

const Article1 = ({ isLoading }) => {
    return(
        <div>
            {
                isLoading ?
                <Chargement/> : 
                <div>
                    <Image src="./images/fondHumidite.png" />
                </div>
            }
        </div>
    );
}

export default Article1;