import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
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
            <div className='accueil-corps' style={{ height: '100%' }}>
                <div
                    className="animated fadeInDown"
                    id="header-title"
                >
                    <Image src="./images/logo.svg" fluid />
                </div>
                <div style={{ bottom: 0, float:'right', marginRight: '200px' }}>
                    <Link to="/kiosque" ><span className="lien-a-propos daily" style={{ fontSize: '3em' }} >Le daily</span></Link>
                </div>
            </div>
        );
    }
}

export default Accueil;