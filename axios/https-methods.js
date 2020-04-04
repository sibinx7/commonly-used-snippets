import axios from "./axios";
import {getResponseStatus, getSlug} from "./helper";

const commonGetResponse = (resolve,respose) => {
    const {data, status} = response;
    if (getResponseStatus(status, 200)) {
      resolve(data);
  }
}

/**
 * @description Common get request function
 * @param url
 * @param params
 * @returns {Promise}
 */
export const getRequest = (url, params) => {
  return new Promise((resolve, reject) => {
    if (!params) {
      params = {};
    }
    axios.get(url, {params})
      .then((response) => {
        commonGetResponse(resolve, response)
      }).catch((error) => {
      reject(error);
    });
  });
};

/**
 * @description Common delete request function
 * @param url
 * @returns {Promise}
 */
export const deleteRequest = (url) => {
  return new Promise((resolve, reject) => {
    axios.delete(url)
      .then((response) => {
        commonGetResponse(resolve, response)
      }).catch(() => {
      reject();
    });
  });
};

/**
 * @description Common post request function
 * @param url
 * @param data
 * @returns {Promise}
 */
export const postRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};

/**
 * @description Common put request function
 * @param url
 * @param data
 * @returns {Promise}
 */
export const putRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};
/**
 * @description Common patch request function
 * @param url
 * @param data
 * @returns {Promise}
 */
export const patchRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then((response) => {
        const {data, status} = response;
        if (getResponseStatus(status, 200)) {
          resolve(data);
        }
      }).catch((error) => {
      reject(error);
    });
  });
};