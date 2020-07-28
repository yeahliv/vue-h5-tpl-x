/**
 * http request
 * @description I'll fill in more Axios tricks later on ...
 */

import axios from 'axios'

axios.defaults.timeout = 50000

/**
 * Get request
 * @param {String} url 
 * @param {String} params 
 */
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'get',
      params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Post request
 * @param {String} url 
 * @param {String} params 
 */
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}