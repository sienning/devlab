import React from 'react';

export const getDatasPointsOfOneDay = (datas, day, shift) => {
    // On attend un day au format 'YYYY-MM-DD'
    const result = [];
    for (let i = 0; i < 24; ++i) {
        const toFound = day + 'T' + (i.toString().length === 1 ? '0' + i.toString() : i.toString());
        result.push({ x: (i + shift + 24) % 24, y: datas.find(data => data?.timestamp?.includes(toFound))?.mean });
    }
    return result.sort((pointA, pointB) => pointA.x < pointB.x ? -1 : 1);
}
