import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

export const getDateTimeMessage = (unix: number) => {
  return dayjs.unix(unix).toDate().toString();
};

export const getDateMessage = (unix: number) => {
  return dayjs.unix(unix).format("MMMM DD, YYYY");
};

export const getElapsedTimeMessage = (unix: number) => {
  return dayjs().to(dayjs.unix(unix));
};
