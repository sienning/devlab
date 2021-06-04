import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Grid stackable columns={3} >
                        <Grid.Column>
                            <Header textAlign="center">IIM</Header>
                        </Grid.Column>
                        <Grid.Column  textAlign="center">
                            <Header>Harry Potter Daily Data'Venir</Header>
                            <Image src="../images/logo-petit.svg" style={{ width: 100, margin: "auto", opacity: 0.4 }} />
                        </Grid.Column>
                        <Grid.Column>
                            <Header textAlign="center">Liens rapides</Header>
                        </Grid.Column>
                    </Grid>
                </Container>
            </footer>
        );
    }
}

export default Footer;