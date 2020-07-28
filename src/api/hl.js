// If you have your own requirements for base_URL
// You can change the way you like
// Global or AXIOS configuration or environment variable configuration

// But most companies have chaotic technology departments
// I recommend using the base URL in my way

import { get, post } from '../utils/http'

export const base_url_1 = 'http://rap2.taobao.org:38080/app/mock/262186'

export const getHelloWorld = params => get(`${base_url_1}/hello-world`, params)

export const mk4396 = params => post(`${base_url_1}/4396`, params)