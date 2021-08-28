export const headers = {
  Authorization: "Bearer " + localStorage.getItem("token"),
};
export const headersForLogin = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
