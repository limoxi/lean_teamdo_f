import Vue from 'vue'
// import { getInfo, logout } from '@/api/login'
// import { logout } from '@/api/login'
import { AccountService, LoginService, UserService } from '@/api/service'
import { ACCESS_TOKEN, PLATFORM_ID, CORP_ID, PCU_ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
    corpUser: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_CORP_USER: (state, user) => {
      state.corpUser = user
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        LoginService.login(userInfo).then(user => {
          Vue.$cookies.set('_jwt', user.sid, 7 * 24 * 60 * 60)
          Vue.ls.set(ACCESS_TOKEN, user.sid, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(PCU_ACCESS_TOKEN, user.primary_corp_user_sid, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(PLATFORM_ID, user.pid, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(CORP_ID, user.cid, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', user.sid)
          commit('SET_NAME', {
            name: user.username,
            welcome: user.corp_name
          })
          console.log(user, 'user')
          commit('SET_CORP_USER', { ...user, ...{ isPlatform: user.id === user.pid } })
          resolve()
        }).catch(error => {
          console.log(error, 'error')
          reject(error)
        })
      })
      // var user = await LoginService.login(userInfo)
      // console.log('in actions.Login ')
      // console.log(user)

      // return new Promise((resolve, reject) => {
      //   login(userInfo).then(response => {
      //     const result = response.result
      //     Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
      //     commit('SET_TOKEN', result.token)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        UserService.getUser().then(async result => {
          result.isPlatform = result.id === Vue.ls.get(PLATFORM_ID)
          result.corpId = Vue.ls.get(CORP_ID)
          const corpUser = await AccountService.getCorpUserInfo(result)
          // const roleObj = formatRole(corpUser)
          result.role = corpUser
          result.roleId = corpUser.id
          result.avatar = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2975421360,3938100507&fm=26&gp=0.jpg'

          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            // role.permissions.map(per => {
            //   if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
            //     const action = per.actionEntitySet.map(action => { return action.action })
            //     per.actionList = action
            //   }
            // })
            // role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            role.permissionList = corpUser.permissions
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.display_name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)
          commit('SET_CORP_USER', result)

          resolve({
            result: result
          })
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      }).catch(e => {
        console.log(e)
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)
        Vue.ls.remove(PCU_ACCESS_TOKEN)
        Vue.ls.remove(PLATFORM_ID)
        Vue.ls.remove(CORP_ID)
        Vue.$cookies.remove('_jwt')
        resolve()
      })
    }

  }
}

export default user
