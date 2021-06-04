import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
class Accueil extends Component {
    // chargementAPI = async () => {
    //     this.setState({ isLoading: true });

    //     // let temperature = "http://chain-api.media.mit.edu/scalar_data/?sensor_id=12021";
    //     let temperature = "https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12021&timestamp__gte=1559417712&aggtime=1d";

    //     // let humidity = "https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12011&timestamp__gte=1559417712&aggtime=1d";
    //     let humidity = "https://chain-api.media.mit.edu/scalar_sensors/12011";
    //     let pressure = "https://chain-api.media.mit.edu/scalar_sensors/12012";

    //     const rqTemperature = axios.get(temperature);
    //     const rqHumidity = axios.get(humidity);
    //     const rqPressure = axios.get(pressure);

    //     await axios.all([rqTemperature, rqHumidity, rqPressure])
    //         .then(axios.spread((...responses) => {
    //             console.log("rqTemperature", responses[0].data.data[responses[0].data.data.length - 1]);
    //             console.log("rqHumidity", responses[1].data);
    //             console.log("rqPressure", responses[2].data);

    //             this.setState({ isLoading: false, temperature: responses[0].data.data, humidity: responses[1].data, pressure: responses[2].data });
    //         }))
    //         .catch((error) => { console.log(error) });
    // }

    // chargementHumidite = async () => {
    //     this.setState({ isLoading: true });
    //     // await axios.get('https://chain-api.media.mit.edu/aggregate_data/?timestamp__lt=1602617712&sensor_id=12011&timestamp__gte=1559417712&aggtime=1d')
    //     // await axios.get('https://chain-api.media.mit.edu/scalar_sensors/')
    //     await axios.get('https://chain-api.media.mit.edu/scalar_sensors/8')
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({ isLoading: false });
    //         })
    //         .catch((error) => { console.log(error) });
    // }
    render() {
        return (
            <div>
                <Container className="accueil">
                    <div id="header-title">
                        <Image src="./images/logo.svg" fluid />
                    </div>
                    <span style={{ textAlign: "center" }}>
                        <Header style={{ height: 'auto', paddingTop: "20px", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>Bienvenu sur le site du Daily Data'Venir !</Header>
                        <p style={{ height: 'auto', fontFamily: "'Londrina Solid', cursive" }}>Les Zones Humides sont un sujet à prendre très au sérieux, alors pourquoi
                            ne pas en apprendre un peu plus avec ce journal ?</p>
                        <p style={{ height: 'auto', fontFamily: "'Grenze Gotisch', cursive" }}>Découvrez le monde des Zones Humides avec l'univers d'Harry Potter ! Inspiré du Daily Prophet, le fameux journal mouvant des sorciers, le <b>Daily Data'Venir</b> nous explique l'impact de ces Zones Humides sur l'environnement, en nous partageant des données de sa faune et de sa flore.</p>
                    </span>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        Tuto rapide
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    <div className="corps">
                        <Header className="articles-header">Les derniers articles ...</Header>
                        <div>
                            <Grid style={{ marginBottom: 20 }} stackable textAlign="center" columns={3}>
                                <Grid.Column>
                                    <Header>Titre</Header>
                                    <Header.Subheader>Date</Header.Subheader>
                                    <Link to="/article/1">
                                        <Image className="article-img"src="./images/articles/article-1.png" />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header>Titre</Header>
                                    <Header.Subheader>Date</Header.Subheader>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header>Titre</Header>
                                    <Header.Subheader>Date</Header.Subheader>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Grid.Column>
                            </Grid>
                            <Link className="voir-plus" to="/kiosque">Voir plus</Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Accueil;