import React, { useState } from 'react';
import Chargement from './Chargement';
import { Image } from 'semantic-ui-react'

const Article2 = ({ isLoading }) => {
    return(
        <div>
            {
                isLoading ?
                <Chargement/> : 
                <div>
                    <video playsInline="true" src="blob:https://tidmarsh.media.mit.edu/02ff358c-4900-47a2-9602-8c129d7c6693"></video>
                    <Image src="./images/conduct-sol.png" />
                </div>
            }
        </div>
    );
}

export default Article2;