import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Chart } from 'react-charts';

const WhiteLightChart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [whiteLightDatas, setWhiteLightDatas] = useState([]);

    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD').toString();

    const getWhiteLightDatas = async () => {
        setIsLoading(true);
        await axios.get('https://chain-api.media.mit.edu/aggregate_data/?sensor_id=9913&aggtime=1h')
            .then((response) => {
                setWhiteLightDataFilterOneDay(response.data.data);
                setIsLoading(false);
            })
            .catch((error) => { console.log(error) });
    };

    const setWhiteLightDataFilterOneDay = datas => {
        const result = [];
        for (let i = 0; i < 24; ++i) {
            const toFound = yesterday + 'T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
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
                marginTop: "20px",
                width: '400px',
                height: '300px',
                display: 'flex',
                fontWeight: 'bold',
            }}
        >
            <p className="ui label" style={{ fontFamily: 'Fredericka the Great', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#696969', color: '#ece8dc'}}>
                Lumière blanche
            </p>
            <Chart data={data} axes={axes} series={series}/>
        </div>
    )
}

export default WhiteLightChart;