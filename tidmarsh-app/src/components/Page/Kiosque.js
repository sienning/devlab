import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
// import Chargement from '../Chargement';

class Kiosque extends Component {
    render() {
        return (
            <Container className="kiosque">
                <Header as='h1'>Le Kiosque</Header>
            </Container>
        );
    }
}

export default Kiosque;