export const findSensor = (sensors, title) => {
  return sensors?.data?.sensors?.find((sensor) => sensor?.title === title);
};
