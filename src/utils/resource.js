import Vue from 'vue'
import { axios } from './request'
import qs from 'qs'
import { CUSTOM_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
class ResourceCls {
  constructor () {
    this._customToken = null
  }

  async _call (method, endpoint, data, files = null) {
    const timestamp = Math.floor(Date.now())
    const path = endpoint.replace(':', '/').replace(/(.*)\./, '$1/')
    let url = `/${path}/`
    const customToken = this.customToken
    if (customToken) {
      Vue.ls.set(CUSTOM_TOKEN, customToken)
    } else {
      Vue.ls.remove(CUSTOM_TOKEN)
    }
    if (method === 'get') {
      data['_t'] = timestamp
      return axios.get(url, {
        params: data,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'indices' })
        }
      })
    } else {
      if (method === 'put') {
        url += `?_t=${timestamp}&_method=put`
      } else if (method === 'delete') {
        url += `?_t=${timestamp}&_method=delete`
      }
      if (files) {
        return axios.post(url, files, {})
      } else {
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(data),
          url: url
        }
        return axios(options)
      }
    }
  }

  async get (option) {
    return this._call('get', option.resource, option.data)
  }

  async put (option) {
    return this._call('put', option.resource, option.data)
  }

  async post (option) {
    return this._call('post', option.resource, option.data)
  }

  async delete (option) {
    return this._call('delete', option.resource, option.data)
  }

  async uploadFile (option) {
    return this._call('put', option.resource, {}, option.files)
  }

  async login (username = null, skip_check = false, pwd = 'b45d6b8ffe35d042f2d28b3a784abdcb') {
    const resp = await this._call('put', 'login.logined_corp_user', {
      'username': username,
      'password': pwd,
      'skip_check': skip_check
    })
    var resource = new ResourceCls()
    resource.customToken = resp['data']['sid']
    return resource
  }

  set customToken (customToken) {
    this._customToken = customToken
  }

  get customToken () {
    return this._customToken
  }
}

const instance = new ResourceCls()

export {
  instance as Resource
}
