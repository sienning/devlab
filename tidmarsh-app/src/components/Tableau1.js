import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Chargement from './Chargement';

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
            data
        } = this.state;
        return(
            <div>
                {
                    isLoading ?
                    <Chargement text="Chargement de l'API"/>:
                    <div>
                        <Header>Daily Prophet</Header>
                        <p><b>Valeur : </b>{data.value}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Tableau1;