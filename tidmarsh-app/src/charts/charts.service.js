import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

const WHITE_LIGHT_ENDPOINT = "/aggregate_data/?sensor_id=9910&aggtime=1h";
const HUMIDITY_ENDPOINT = "/aggregate_data/?sensor_id=9907&aggtime=1h";
const TEMPERATURE_ENDPOINT = "/aggregate_data/?sensor_id=9903&aggtime=1h";

const getLastDayData = (datas) => {
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD").toString();
  const result = [];
  for (let i = 0; i < 24; ++i) {
    const toFound =
      yesterday +
      "T" +
      (i.toString().length === 1 ? "0" + i.toString() : i.toString());
    result.push({
      x: i,
      y: datas.find((data) => data.timestamp.includes(toFound)).mean,
    });
  }
  return result;
};

export const useWhiteLightData = (config = {}) => {
  return useQuery(
    ["whiteLight"],
    () =>
      axios.get(`${WHITE_LIGHT_ENDPOINT}`).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};

export const useHumidityData = (config = {}) => {
  return useQuery(
    ["humidity"],
    () =>
      axios.get(`${HUMIDITY_ENDPOINT}`).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};

export const useTemperatureData = (config = {}) => {
  return useQuery(
    ["temperature"],
    () =>
      axios.get(`${TEMPERATURE_ENDPOINT}`).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};
