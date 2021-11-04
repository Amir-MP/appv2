import apiService from "./apiService";
/* import config from "./service-config.json"; */

/* const _baseAddress = config.apiUrl + "Users"; */
const _apiService = new apiService();

export default class accountService {
  login(email, password) {
    return new Promise((resolve, reject) => {
      _apiService
        /* .post(_baseAddress + "/login", { userName: username, password: password }) */
        .post("https://reqres.in/api/login", {
          email: email,
          password: password,
        })
        .then((result) => {
          this.setToken(result?.token);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getAllUser() {
    return new Promise((resolve, reject) => {
      _apiService
        .get("https://reqres.in/api/users")
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  register(email, password) {
    return new Promise((resolve, reject) => {
      _apiService
        .post("https://reqres.in/api/register", {
          email: email,
          password: password,
        })
        .then((result) => {
          this.setToken(result?.data?.token);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  regionsAll() {
    return new Promise((resolve, reject) => {
      _apiService
        .get("http://45.159.196.58:7447/v1/regions/all")
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  regionId(url) {
    return new Promise((resolve, reject) => {
      _apiService
        .get(url)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

}
