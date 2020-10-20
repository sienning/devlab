import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid } from 'semantic-ui-react';
import Chargement from './Chargement';
import Article1 from './Article1';

class Tableau1 extends Component {
    state = {
        isLoading : false,
        data : {},
    };

    componentDidMount() {
        this.chargementAPI();
    }

    chargementAPI = async () => {
        this.setState({ isLoading : true });
        await axios.get('http://chain-api.media.mit.edu/scalar_sensors/12011')
        .then((response) => {
            console.log(response.data);
            this.setState({ isLoading : false, data : response.data });
        })
        .catch((error) => { console.log(error) });
    }

    render(){
        const {
            isLoading,
        } = this.state;
        return(
            <div>
                {
                    isLoading ?
                    <Chargement text="Chargement de l'API"/> :
                    <div>
                        <Header textAlign='center' >DAILY WETLAND</Header>
                        <Article1/>
                    </div>
                }
            </div>
        );
    }
}

export default Tableau1;