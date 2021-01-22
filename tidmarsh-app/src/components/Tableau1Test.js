import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';
import Chargement from './Chargement';
import Article1 from './Article1';
// import Article2 from './Article2';
import HeaderDaily from './HeaderDaily';

const Tableau1 = React.forwardRef((props, ref) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [data, setData] = useState({});
    const [humidity, setHumidity] = useState({});
    const [soil_humidity, setSoil_humidity] = useState(props.temperature);
    const [temperature, setTemperature] = useState(props.temperature);
    const [pressure, setPressure] = useState(props.pressure);

    return(
        <div ref={ref} >
            <div>
                <h1 className='titre5' ><Image src="./images/logo.svg" fluid /></h1>
                <HeaderDaily
                    temperature={temperature}
                    humidity={humidity}
                    pressure={pressure}
                />
                <Article1 isLoading={isLoading} />
            </div>
        </div>
    );
});

export default Tableau1;