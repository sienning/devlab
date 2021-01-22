import React from 'react';
import axios from 'axios';
import { Chart } from 'react-charts';
import { useQuery } from "react-query";

import { getDatasPointsOfOneDay } from "./chartsService";
import { TIDMARSH_HUMIDITY_ENDPOINT, TIDMARSH_SHIFT, TIDMARSH_TEMPERATURE_ENDPOINT } from "../../utils/constants";

const HumidityTemperatureChart = ({ day }) => {

    const humidityQuery =
        useQuery('humidity', () => axios.get(TIDMARSH_HUMIDITY_ENDPOINT)
            .then(result => result.data.data));
    const dataHum = humidityQuery ? humidityQuery.data : [];

    const temperatureQuery =
        useQuery('temperature', () => axios.get(TIDMARSH_TEMPERATURE_ENDPOINT)
            .then(result => result.data.data));
    const dataTemp = temperatureQuery ? temperatureQuery.data : [];

    const lastDayHumidityPoints = getDatasPointsOfOneDay(dataHum ? dataHum : [], day.format('YYYY-MM-DD'), TIDMARSH_SHIFT);

    const lastDayTemperaturePoints = getDatasPointsOfOneDay(dataTemp ? dataTemp : [], day.format('YYYY-MM-DD'), TIDMARSH_SHIFT);

    const data = React.useMemo(
        () => [
            {
                label: 'Humidité',
                data: lastDayHumidityPoints,
                color: '#556B2F'
            },
            {
                label: 'Température',
                data: lastDayTemperaturePoints,
                color: '#860909'
            }
        ],
        [lastDayHumidityPoints, lastDayTemperaturePoints]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
            { type: 'linear', position: 'right' },
        ], []);

    return (
        <div
            style={{
                width: '300px',
                height: '200px',
                display: 'flex',
                fontWeight: 'bold',
            }}
        >
            <p class="ui label" style={{ fontFamily: 'Londrina Solid', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#556B2F', color: '#ece8dc'}}>
                Humidité
            </p>
                <Chart data={data} axes={axes} />
            <p class="ui label" style={{ fontFamily: 'Special Elite', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#860909', color: '#ece8dc'}}>
                Température
            </p>
        </div>
    )
}

export default HumidityTemperatureChart;
