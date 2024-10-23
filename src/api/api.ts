import { request } from './axios'

export class Test {
  /**
   * @description 用户登录
   * @param {string} username - 用户名
   * @return {HttpResponse} result
   */
  static async test1(params: any) {
    return request('/test', params, 'GET')
  }
}
