import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import Chargement from '../Chargement';

class APropos extends Component {
    render() {
        return (
            <Container>
                <Header as='h1'>À Propos</Header>
                <Grid>
                    <Grid.Column>
                        <Header>Le projet Data'Venir</Header>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <Header>Qui sommes nous ?</Header>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <Header>Les Zones Humides</Header>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <Header>IIM</Header>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default APropos;