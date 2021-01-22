import React from 'react';
import { useQuery } from 'react-query';
import axios from "axios";
import { Chart } from 'react-charts';

import { TIDMARSH_SHIFT, TIDMARSH_WHITE_LIGHT_ENDPOINT } from "../../utils/constants";
import { getDatasPointsOfOneDay } from './chartsService';

const WhiteLightChart = ({ day }) => {
    const whiteLightQuery =
        useQuery('whiteLight', () => axios.get(TIDMARSH_WHITE_LIGHT_ENDPOINT)
            .then(result => result.data.data));
    const dataWL = whiteLightQuery ? whiteLightQuery.data : [];

    const lastDayWhiteLightPoints = getDatasPointsOfOneDay(dataWL ? dataWL : [], day.format('YYYY-MM-DD'), TIDMARSH_SHIFT);

    const data = React.useMemo(
        () => [
            {
                label: 'Humidité',
                data: lastDayWhiteLightPoints,
                color: '#696969'
            },
        ],
        [lastDayWhiteLightPoints]
    )

    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
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
            <p class="ui label" style={{ fontFamily: 'Fredericka the Great', writingMode: 'vertical-rl', textOrientation: 'upright', textAlign: 'center', backgroundColor: '#696969', color: '#ece8dc'}}>
                Lumière blanche
            </p>
            <Chart data={data} axes={axes} series={series}/>
        </div>
    )
}

export default WhiteLightChart;
