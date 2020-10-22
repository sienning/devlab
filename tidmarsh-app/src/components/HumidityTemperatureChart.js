import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-charts';


export const HumidityTemperatureChart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [humidityDatas, setHumidityDatas] = useState([]);
    const [temperatureDatas, setTemperatureDatas] = useState([]);

    const getHumidityDatas = async () => {
        setIsLoading(true);
        await axios.get('http://chain-api.media.mit.edu/aggregate_data/?sensor_id=9909&aggtime=1h')
            .then((response) => {
                setHumidityDataFilterOneDay(response.data.data);
                setIsLoading(false);
            })
            .catch((error) => { console.log(error) });
    };

    const getTemperatureDatas = async () => {
        setIsLoading(true);
        await axios.get('http://chain-api.media.mit.edu/aggregate_data/?sensor_id=9908&aggtime=1h')
            .then((response) => {
                console.log(response.data);
                setTemperatureDataFilterOneDay(response.data.data);
                setIsLoading(false);
            })
            .catch((error) => { console.log(error) });
    };

    const setHumidityDataFilterOneDay = datas => {
        const result = [];
        for (let i = 0; i < 24; ++i) {
            const toFound = '2020-10-19T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
            result.push({ x: i, y: datas.find(data => data.timestamp.includes(toFound)).mean });
        }
        setHumidityDatas(result);
    };

    const setTemperatureDataFilterOneDay = datas => {
        const result = [];
        for (let i = 0; i < 24; ++i) {
            const toFound = '2020-10-19T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
            result.push({ x: i, y: datas.find(data => data.timestamp.includes(toFound)).mean});
        }
        setTemperatureDatas(result);
    };

    useEffect(() => {
        getHumidityDatas();
        getTemperatureDatas();
    }, []);

    const data = React.useMemo(
        () => [
            {
                label: 'Humidité',
                data: humidityDatas,
            },
            {
                label: 'Température',
                data: temperatureDatas
            }
        ],
        [humidityDatas, temperatureDatas]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div
            style={{
                width: '400px',
                height: '300px',
                margin: '50px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}