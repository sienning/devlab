import axios from "axios";
import { useQuery } from "react-query";

export const baseURL = "https://chain-api.media.mit.edu";

export const TIDMARSH_UPDATES_DEVICES = [
  { title: "0x8223", id: 25941 },
  { title: "0x82FF", id: 25946 },
];

export const API_SITES_URL = `${baseURL}/sites`;
export const API_SITE_DEVICES_URL = (siteID) =>
  `${baseURL}/devices?site_id=${siteID}`;

export const useTidmarsh = () => {
  return useSite(7);
};

const useSite = (siteId, config = {}) => {
  const getSite = useQuery(
    ["site", siteId],
    () => axios.get(`${API_SITES_URL}/${siteId}`),
    {
      ...config,
    }
  );
  const getDevices = useQuery(
    ["siteDevices", siteId],
    () =>
      axios.get(`${baseURL}/devices?site_id=${siteId}`).then((data) => ({
        totalItems: data?.data?.totalCount,
        devices: data?.data?._links?.items?.map((item) => ({
          id: item.href.split("devices/")[1],
          title: item.title,
        })),
        first: data?.data?._links?.first,
        last: data?.data?._links?.last,
        previous: data?.data?._links?.previous,
        next: data?.data?._links?.next,
        self: data?.data?._links?.self,
      })),
    {
      ...config,
    }
  );

  return {
    getSite: () => getSite,
    getDevices: () => getDevices,
  };
};

export const API_DEVICES_URL = `${baseURL}/devices`;
export const API_DEVICE_SENSORS_URL = (deviceId) =>
  `${baseURL}/sensors?device_id=${deviceId}`;

export const useDevice = (deviceId, config = {}) => {
  const getDevice = useQuery(
    ["device", deviceId],
    () => axios.get(`${API_DEVICES_URL}/${deviceId}`),
    {
      ...config,
    }
  );

  const getSensors = useQuery(
    ["deviceSensors", deviceId],
    () =>
      axios.get(API_DEVICE_SENSORS_URL(deviceId)).then((data) => ({
        totalItems: data?.data?.totalCount,
        sensors: data?.data?._links?.items?.map((item) => ({
          id: item.href.split("sensors/")[1],
          title: item.title,
        })),
        first: data?.data?._links?.first,
        last: data?.data?._links?.last,
        previous: data?.data?._links?.previous,
        next: data?.data?._links?.next,
        self: data?.data?._links?.self,
      })),
    {
      ...config,
    }
  );

  return { getDevice: () => getDevice, getSensors: () => getSensors };
};

export const API_SENSOR_URL = (sensorId) =>
  `${baseURL}/scalar_sensors/${sensorId}`;

export const useSensor = (sensorId, config = {}) => {
  return useQuery(
    ["sensor", sensorId],
    () =>
      axios.get(API_SENSOR_URL(sensorId)).then((response) => response?.data),
    {
      ...config,
    }
  );
};
