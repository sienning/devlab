import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Image } from 'semantic-ui-react';
import Chargement from './Chargement';

class Accueil extends Component {
    state = {
        isLoading : false,
        data : {},
        humidity : {},
        soil_humidity : {},
        temperature : {},
        pressure : {},
    };

    componentDidMount() {
        // this.chargementAPI();
    }

    chargementAPI = async () => {
        this.setState({ isLoading : true });

        // let temperature = "http://chain-api.media.mit.edu/scalar_data/?sensor_id=12021";
        let temperature = "https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12021&timestamp__gte=1559417712&aggtime=1d";

        // let humidity = "https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12011&timestamp__gte=1559417712&aggtime=1d";
        let humidity = "https://chain-api.media.mit.edu/scalar_sensors/12011";
        let pressure = "https://chain-api.media.mit.edu/scalar_sensors/12012";

        const rqTemperature = axios.get(temperature);
        const rqHumidity = axios.get(humidity);
        const rqPressure = axios.get(pressure);

        await axios.all([rqTemperature, rqHumidity, rqPressure])
        .then(axios.spread((...responses) => {
            console.log("rqTemperature", responses[0].data.data[responses[0].data.data.length-1]);
            console.log("rqHumidity", responses[1].data);
            console.log("rqPressure", responses[2].data);
            
            this.setState({ isLoading : false, temperature : responses[0].data.data, humidity : responses[1].data, pressure : responses[2].data });
        }))
        .catch((error) => { console.log(error) });
    }

    chargementHumidite = async () => {
        this.setState({ isLoading : true });
        // await axios.get('https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12011&timestamp__gte=1559417712&aggtime=1d')
        // await axios.get('https://chain-api.media.mit.edu/scalar_sensors/')
        await axios.get('https://chain-api.media.mit.edu/scalar_sensors/8')
        .then((response) => {
            console.log(response);
            this.setState({ isLoading : false });
        })
        .catch((error) => { console.log(error) });
    }

    render(){
        const {
            isLoading,
            temperature,
            humidity,
            pressure,
        } = this.state;
        return(
            <div>
                {
                    isLoading ?
                    <Chargement style={{ minHeight: '100%' }} texte="Chargement de votre Daily ..."/> :
                    <Container className="accueil">
                        <Image src="./images/logo.svg" fluid />
                        <span style={{ textAlign: "center" }}>
                            <Header style={{ height: 'auto', paddingTop: "20px", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>Bienvenu sur le site du Daily Data'Venir !</Header>
                            <p style={{ height: 'auto', fontFamily: "'Londrina Solid', cursive" }}>
                                Les Zones Humides sont un sujet à prendre très au sérieux, alors pourquoi 
                                ne pas en apprendre un peu plus avec ce journal ?
                            </p>
                            <p style={{ height: 'auto', fontFamily: "'Grenze Gotisch', cursive" }}>
                                Découvrez le monde des Zones Humides avec l'univers d'Harry Potter ! Inspiré du Daily Prophet, le fameux journal mouvant des sorciers, le <b>Daily Data'Venir</b> nous explique l'impact de ces Zones Humides sur l'environnement, en nous partageant des données de sa faune et de sa flore.
                            </p>
                            <p style={{ height: 'auto', fontFamily: "'Patua One', cursive" }}>dee</p>
                        </span>
                        
                    </Container>
                }
            </div>
        );
    }
}

export default Accueil;