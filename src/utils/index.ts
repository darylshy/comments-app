import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).format("dddd, MMM D h:mm A");
};
