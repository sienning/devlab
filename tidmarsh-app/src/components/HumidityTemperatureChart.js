import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-charts';


const HumidityTemperatureChart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [humidityDatas, setHumidityDatas] = useState([]);
    const [temperatureDatas, setTemperatureDatas] = useState([]);

    useEffect(() => {
        getHumidityDatas();
        getTemperatureDatas();
    }, []);

    const getHumidityDatas = async () => {
        setIsLoading(true);
        await axios.get('https://chain-api.media.mit.edu/aggregate_data/?sensor_id=9909&aggtime=1h')
        .then((response) => {
            console.log("humidity data : ", response.data.data);
            setHumidityDataFilterOneDay(response.data.data);
            setIsLoading(false);
        })
        .catch((error) => { console.log(error) });
    };

    const getTemperatureDatas = async () => {
        setIsLoading(true);
        await axios.get('https://chain-api.media.mit.edu/aggregate_data/?sensor_id=9908&aggtime=1h')
        .then((response) => {
            console.log("temperature : ", response.data);
            setTemperatureDataFilterOneDay(response.data.data);
            setIsLoading(false);
        })
        .catch((error) => { console.log(error) });
    };

    const setHumidityDataFilterOneDay = datas => {
        console.log('setHumidity');
        const result = [];
        console.log(datas[0].timestamp);
        for (let i = 0; i < 24; ++i) {
            const toFound = '2020-10-19T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
            console.log(toFound);
            result.push({ x: i, y: datas.find(data => data.timestamp.includes(toFound)).mean });
        }
        setHumidityDatas(result);
    };

    const setTemperatureDataFilterOneDay = datas => {
        console.log('setTemperature');
        const result = [];
        for (let i = 0; i < 24; ++i) {
            const toFound = '2020-11-17T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
            console.log(datas);
            result.push({ x: i, y: datas.find(data => data.timestamp.includes(toFound)).mean});
        }
        setTemperatureDatas(result);
    };

    const data = React.useMemo(
        () => [
            {
                label: 'Humidité',
                data: humidityDatas,
                color: '#556B2F'
            },
            {
                label: 'Température',
                data: temperatureDatas,
                color: '#860909'
            }
        ],
        [humidityDatas, temperatureDatas]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'utc', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ], []);

    return (
        <div
            style={{
                width: '300px',
                height: '200px',
                display: 'flex',
                fontWeight: 'bold',
                color: 'white'
            }}
        >
            <p className="ui label" style={{ fontFamily: 'Londrina Solid', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#556B2F', color: '#ece8dc'}}>
                Humidité
            </p>
                <Chart data={data} axes={axes} />
            <p className="ui label" style={{ fontFamily: 'Special Elite', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#860909', color: '#ece8dc'}}>
                Température
            </p>
        </div>
    )
}

export default HumidityTemperatureChart;