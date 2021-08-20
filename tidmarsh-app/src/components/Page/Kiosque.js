import React, { Component } from 'react';
import { Container, Header, Grid, Image, Reveal } from 'semantic-ui-react';
// import Chargement from '../Chargement';
import { Link } from "react-router-dom";
import dayjs from "dayjs";

class Kiosque extends Component {
    state = {
        sevenLastDays: []
    }

    getSevenLastDays = () => {
        const today = dayjs();
        return [...Array(7)].map((_, index) => today.subtract(index + 1, "day"));
    };

    componentDidMount() {
        this.setState({ sevenLastDays: this.getSevenLastDays() });
    }

    render() {
        return (
            <Container className="kiosque">
                <Header style={{ fontFamily: "'Grenze Gotisch', cursive" }} as='h1'>Le Kiosque</Header>
                <Grid textAlign="center" stackable columns={3}>

                    {
                        this.state.sevenLastDays.length > 0 ?
                            this.state.sevenLastDays.map(day => (
                                <Grid.Column className="grid-col-kiosque">
                                    <Link
                                        to={`/article/tidmarsh?deviceId=0x8223&date=${day?.format(
                                            "YYYY-MM-DD"
                                        )}`}
                                    >
                                        <Image className="article-img" src={`./images/articles/galerie-${Math.floor(Math.random() * 5 + 1)}.png`} circular />
                                    </Link>
                                </Grid.Column>

                            )) : null
                    }

                    {
                        this.state.sevenLastDays.length > 0 ?
                            this.state.sevenLastDays.map(day => (
                                <Grid.Column className="grid-col-kiosque">
                                    <Link
                                        to={`/article/article2?deviceId=0x8223&date=${day?.format(
                                            "YYYY-MM-DD"
                                        )}`}
                                    >
                                        <Image src={`./images/articles/galerie-${Math.floor(Math.random() * 5 + 1)}.png`} className="article-img" circular />
                                    </Link>
                                </Grid.Column>

                            )) : null
                    }
                    </Grid>
            </Container>
        );
    }
}

export default Kiosque;