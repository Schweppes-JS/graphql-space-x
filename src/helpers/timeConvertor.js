export const convertUTCtoLocal = (utcTime) => {
  return new Date(utcTime).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
