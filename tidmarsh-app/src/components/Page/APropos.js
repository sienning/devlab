import React, { Component } from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";

class APropos extends Component {
    render() {
        return (
            <Container className="a-propos">
                <Header as='h1'>À Propos</Header>
                <Grid columns={2}>
                    <Grid.Column width={10}>
                        <Header style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }} >Le projet Data'Venir</Header>
                        <p>
                            En collaboration avec le MIT, nous avons choisi ce sujet pour donner de la voix à un sujet d’intérêt majeur. En utilisant la DataViz, nous voulons éduquer nos utilisateurs de manière ludique et percutante.
                        </p>
                        <p>
                            Les zones humides étudiées dans ce projet se situent dans la zone de Tidmarsh dans le sud-est du Massachusetts en terres agricoles artificielles surélevées. Deux siècles de culture de canneberges ont transformé des milliers d'acres de zones humides naturelles  Aujourd'hui, les scientifiques comprennent que cette transformation a coûté cher à l'environnement. Maintenant que l'économie de l'industrie de la canneberge a réduit les profits agricoles dans la région, il est temps de formuler des politiques et des fonds qui encouragent les agriculteurs à envisager la restauration.
                        </p>
                        <p>
                            Créé en 2011, le Living Observatory est une organisation d'apprentissage collaborative de scientifiques, d'artistes et de praticiens de la restauration des zones humides pour documenter, expliquer les aspects des changements survenus avant, pendant et après le premier projet de restauration dans le Massachusetts.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image
                            src="../images/mit-logo.gif"
                        />
                    </Grid.Column>
                </Grid>
                <Grid textAlign="right" columns={2}>
                    <Grid.Column width={3}>
                        <Image
                            size='medium'
                            src="../images/logo-iim-site.png"
                        />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Header style={{ fontFamily: "'Londrina Solid', cursive" }}>Qui sommes nous ?</Header>
                        <p>
                            Nous sommes un groupe d’étudiants, actuellement en master 1 dans deux différents diplômes de l’Institut de l’Internet et du Multimédia (IIM). Léna Eng et Hugo Pérard qui évoluent dans le master Ingénierie Web et Mobile (IWM) s'occupent du développement technique de notre plateforme de Data Visualisation. Pierre Bandasavanh, Caroline Boyer, Virgil Leclerc et Axelle Ponthieu s’occupent davantage du contenu de notre journal interactif et de la création des visuels. Nous travaillons cependant de manière complémentaire et nous appuyons chacun des membres du groupe quand nous le pouvons, car nous sommes tous polyvalents grâce à notre formation très complète.
                        </p>
                        <p>
                            Le thème des zones humides nous a paru être une évidence car, étant tous sensibilisés à la cause environnementale, nous voulions construire un projet mettant en évidence l’impact négatif qu’ont les actions des Humains sur la nature, et le besoin de modifier nos habitudes.
                        </p>
                        <p>
                            Ce projet de Data Visualisation se veut interactif et accessible aux plus grand nombre. C’est pourquoi nous avons choisi l’univers d’Harry Potter, à travers le célèbre journal du Daily Prophet. Tout le monde a un jour entendu parlé de cet univers fantastique, et sûrement été plongé en plein dans la magie des sorciers. C’est donc un thème qui parle à beaucoup de monde, et c’est notre but : faire echo à nos utilisateurs en leur parlant des zones humides.
                        </p>
                    </Grid.Column>

                </Grid>
                <Grid>
                    <Grid.Column>
                        <Header style={{ fontFamily: "'Grenze Gotisch', cursive" }}>Les Zones Humides</Header>
                        <p>
                            Caractérisées par une biodiversité unique, les zones humides sont aujourd’hui une source de préoccupation majeure. Elles abritent de nombreuses espèces animales et végétales et jouent un rôle important dans la régulation des ressources en eau, la purification des milieux et la prévention des inondations. Les zones humides regroupent marécages, tourbières, prairies humides, lagunes, mangroves. Si elles sont aujourd’hui au centre de l’attention, c’est parce qu’elles sont constamment menacées par les activités humaines et les changements globaux mondiaux. Les préserver sont des enjeux environnementaux, économiques et sociaux importants.
                        </p>
                        <p>
                            Plusieurs paramètres régissent l’équilibre de ces territoires. Le premier facteur est l’eau qui est déterminant pour les fonctions de ces espaces naturels et la vie des animaux et des plantes. L'inondation des terres, la salinité de l'eau (eau douce, eau salée ou salinité) et la composition en éléments nutritifs de ces territoires fluctuent quotidiennement, saisonnièrement ou annuellement.
                        </p>
                        <p>
                            Ces changements dépendent des conditions climatiques, de la localisation de la zone dans le bassin hydrologique et de l'environnement géomorphologique (géographie, topographie). Ces fluctuations sont à l'origine de la formation de sols spécifiques et d'une végétation et d'une faune spécifiques. Par conséquent, dans un même environnement, l'abondance des algues, des poissons, de la sauvagine et d'autres animaux sauvages variera selon la période de l'année.
                        </p>
                    </Grid.Column>
                </Grid>
                <Grid columns={2}>
                    <Grid.Column width={3}>
                        <Image
                            as='a'
                            target="_blank"
                            size='small'
                            src="../images/logo-iim.png"
                            href='https://www.iim.fr/'
                        />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div
                            style={{ height: '150px', width: '150px', backgroundColor: "#541615", verticalAlign: "middle", textAlign: "center" }}
                        >
                            <a
                                target="_blank"
                                href='https://tidmarsh.media.mit.edu/data/herring'
                                style={{ height: '150px', width: '150px', verticalAlign: "middle", textAlign: "center" }}
                            >
                                <Image
                                    size='small'
                                    src="../images/logo-tidmarsh.svg"
                                />
                                <Header inverted>Tidmarsh</Header>
                            </a>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default APropos;
