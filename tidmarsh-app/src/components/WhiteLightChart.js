import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-charts';


export const WhiteLightChart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [whiteLightDatas, setWhiteLightDatas] = useState([]);

    const getWhiteLightDatas = async () => {
        setIsLoading(true);
        await axios.get('http://chain-api.media.mit.edu/aggregate_data/?sensor_id=9913&aggtime=1h')
            .then((response) => {
                setWhiteLightDataFilterOneDay(response.data.data);
                setIsLoading(false);
            })
            .catch((error) => { console.log(error) });
    };

    const setWhiteLightDataFilterOneDay = datas => {
        const result = [];
        for (let i = 0; i < 24; ++i) {
            const toFound = '2020-10-19T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
            result.push({ x: i, y: datas.find(data => data.timestamp.includes(toFound)).mean});
        }
        setWhiteLightDatas(result);
    };

    useEffect(() => {
        getWhiteLightDatas();
    }, []);

    const data = React.useMemo(
        () => [
            {
                label: 'Humidité',
                data: whiteLightDatas,
                color: '#696969'
            },
        ],
        [whiteLightDatas]
    )

    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'utc', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    return (
        <div
            style={{
                width: '400px',
                height: '300px',
                display: 'flex',
                fontWeight: 'bold',
            }}
        >
            <p class="ui label" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#696969', color: '#ece8dc'}}>
                Lumière blanche
            </p>
            <Chart data={data} axes={axes} series={series}/>
        </div>
    )
}