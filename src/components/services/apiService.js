import { toast } from "react-toastify";
/* import baseUrl from "./service-config.json"; */

import axios from "axios";
function doesConnectionExist() {
  var xhr = new XMLHttpRequest();
 /*  var url = baseUrl.baseUrl + "api/Users/Wallets/ping"; */
  xhr.open("get",/*  url, */ false);
  try {
    xhr.send();
    if (xhr.status >= 200 && xhr.status < 304) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

class apiService {

  postWithoutToken(url, data) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          data: data,
          method: "post",
          url: url,
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(function (error) {
            if (!doesConnectionExist()) {
              toast.error(
                "متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است",
                {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                }
              );
            } else if (error.response.status === 401) {
              localStorage.clear();
              localStorage.setItem("ex-token", true);
              window.location.href = "/login";
            }
            if (
              error != null &&
              error.message != null &&
              error.message.toString().toLowerCase() === "network error"
            ) {
              console.log("network error");
            } else if (
              error != null &&
              error.response != null &&
              error.response.status === 404
            ) {
              console.log("not found!");
            } else {
              if (
                error.response != null &&
                error.response.data != null &&
                error.response.data.message != null
              ) {
                toast.error(error.response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                });
              } else {
                toast.error(
                  "متاسفانه خطای غیر منتظره ای در سرویس کیف پول بوجود آمده است",
                  {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 4000,
                  }
                );
              }
              reject(error);
              console.log("unexpected error");
            }
            reject();
          });
      } catch (err) {
        console.log("i have a  error");
      }
    });
  }

  get(url, data) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          method: "get",
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(function (error) {
            console.log(error);
            if (!doesConnectionExist()) {
              toast.error(
                "متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است",
                {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                }
              );
            } else if (error.response.status === 401) {
              localStorage.clear();
              localStorage.setItem("ex-token", true);
              window.location.href = "/login";
            }
            if (
              error != null &&
              error.message != null &&
              error.message.toString().toLowerCase() === "network error"
            ) {
              console.log("network error");
            } else if (
              error != null &&
              error.response != null &&
              error.response.status === 404
            ) {
              console.log("not found!");
            } else {
              console.log("unexpected error");
            }
            reject();
          });
      } catch (err) {
        console.log("i have a  error");
      }
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          data: data,
          method: "post",
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authToken"),
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(function (error) {
            if (!doesConnectionExist()) {
              toast.error(
                "متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است",
                {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                }
              );
            } else if (error.response.status === 401) {
              localStorage.clear();
              localStorage.setItem("ex-token", true);
              window.location.href = "/login";
            }
            if (
              error != null &&
              error.message != null &&
              error.message.toString().toLowerCase() === "network error"
            ) {
              console.log("network error");
            } else if (
              error != null &&
              error.response != null &&
              error.response.status === 404
            ) {
              console.log("not found!");
            } else {
              if (
                error.response != null &&
                error.response.data != null &&
                error.response.data.message != null
              ) {
                toast.error(error.response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                });
              } else {
                toast.error(
                  "متاسفانه خطای غیر منتظره ای در سرویس کیف پول بوجود آمده است",
                  {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 4000,
                  }
                );
              }
              reject(error);
              console.log("unexpected error");
            }
            reject();
          });
      } catch (err) {
        console.log("i have a  error");
      }
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          data: data,
          method: "put",
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authToken"),
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(function (error) {
            if (!doesConnectionExist()) {
              toast.error(
                "متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است",
                {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                }
              );
            } else if (error.response.status === 401) {
              localStorage.clear();
              localStorage.setItem("ex-token", true);
              window.location.href = "/login";
            }
            if (
              error != null &&
              error.message != null &&
              error.message.toString().toLowerCase() === "network error"
            ) {
              console.log("network error");
            } else if (
              error != null &&
              error.response != null &&
              error.response.status === 404
            ) {
              console.log("not found!");
            } else {
              if (
                error.response != null &&
                error.response.data != null &&
                error.response.data.message != null
              ) {
                toast.error(error.response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                });
              } else {
                toast.error(
                  "متاسفانه خطای غیر منتظره ای در سرویس کیف پول بوجود آمده است",
                  {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 4000,
                  }
                );
              }
              reject(error);
              console.log("unexpected error");
            }
            reject();
          });
      } catch (err) {
        console.log("i have a  error");
      }
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          method: "delete",
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authToken"),
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(function (error) {
            if (!doesConnectionExist()) {
              toast.error(
                "متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است",
                {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                }
              );
            } else if (error.response.status === 401) {
              localStorage.clear();
              localStorage.setItem("ex-token", true);
              window.location.href = "/login";
            }
            if (
              error != null &&
              error.message != null &&
              error.message.toString().toLowerCase() === "network error"
            ) {
              console.log("network error");
            } else if (
              error != null &&
              error.response != null &&
              error.response.status === 404
            ) {
              console.log("not found!");
            } else {
              if (
                error.response != null &&
                error.response.data != null &&
                error.response.data.message != null
              ) {
                toast.error(error.response.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 4000,
                });
              } else {
                toast.error(
                  "متاسفانه خطای غیر منتظره ای در سرویس کیف پول بوجود آمده است",
                  {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 4000,
                  }
                );
              }
              reject(error);
              console.log("unexpected error");
            }
            reject();
          });
      } catch (err) {
        console.log("i have a  error");
      }
    });
  }
}
export default apiService;
