import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { baseURL } from "../utils/api";

export const getMidnightTimestamp = (day) =>
  dayjs(day.format("YYYY-MM-DD")).unix();

const API_AGGREGATE_DATA_URL = (sensor_id, from, to) =>
  `${baseURL}/aggregate_data/?sensor_id=${sensor_id}&aggtime=1h${
    from ? `&timestamp__gte=${from}` : ""
  }${to ? `&timestamp__lt=${to}` : ""}`;

const formatDataViz = (data) => {
  return data.map((value, index) => ({ x: index, y: value?.mean }));
};

export const useSensorData = (sensorId, params = {}, config = {}) => {
  return useQuery(
    ["whiteLight", sensorId, params],
    () =>
      axios
        .get(
          API_AGGREGATE_DATA_URL(
            sensorId,
            params?.timestamp__gte,
            params?.timestamp__lt
          )
        )
        .then((response) => ({
          ...response?.data,
          data: formatDataViz(response?.data?.data),
        })),
    {
      ...config,
    }
  );
};
