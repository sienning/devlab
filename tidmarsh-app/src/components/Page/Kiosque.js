import React, { Component } from 'react';
import { Container, Header, Grid, Image, Reveal } from 'semantic-ui-react';
// import Chargement from '../Chargement';
import { Link } from "react-router-dom";
import Filtre from '../Filtre';

class Kiosque extends Component {
    render() {
        return (
            <Container className="kiosque">
                <Header style={{ fontFamily: "'Grenze Gotisch', cursive" }} as='h1'>Le Kiosque</Header>
                <Filtre />
                <Grid textAlign="center" stackable columns={3}>
                    <Grid.Row>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header className="header-article-kiosque">Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='small fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className="grid-col-kiosque">
                            <Reveal className="reveal-kiosque" animated='large fade'>
                                <Reveal.Content visible>
                                    <div className="cover-article-img">
                                        <Header>Journal 1</Header>
                                        <Image  src="../images/livres.png" />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Link to="/article/1">
                                        <Image className="article-img" src="./images/articles/article-1.png" />
                                    </Link>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Kiosque;