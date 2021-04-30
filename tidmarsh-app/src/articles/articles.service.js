import axios from "axios";
import { useQuery } from "react-query";

const TEMPERATURE_ENDPOINT = "/scalar_sensors/12010";
const HUMIDITY_ENDPOINT = "/scalar_sensors/12011";
const PRESSURE_ENDPOINT = "/scalar_sensors/12012";

export const useTemperature = (config = {}) => {
  return useQuery(
    ["head_temperature"],
    () =>
      axios.get(`${TEMPERATURE_ENDPOINT}`).then((response) => response?.data),
    {
      ...config,
    }
  );
};

export const useHumidity = (config = {}) => {
  return useQuery(
    ["head_humidity"],
    () => axios.get(`${HUMIDITY_ENDPOINT}`).then((response) => response?.data),
    {
      ...config,
    }
  );
};

export const usePressure = (config = {}) => {
  return useQuery(
    ["head_pressure"],
    () => axios.get(`${PRESSURE_ENDPOINT}`).then((response) => response?.data),
    {
      ...config,
    }
  );
};
