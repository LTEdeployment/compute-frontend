import * as types from './mutation-types'
import Vue from 'vue'
import * as config from '../../config/api'

const BASE_API_URL = config['base_url'] + 'api/'

export const userLogin = ({
  commit
}, payload) => {
  Vue.http
    .post(`${BASE_API_URL}user/signin`, {
      email: payload.email,
      password: payload.password
    }, {
      xhr: {
        withCredentials: true
      }
    })
    .then(function (response) {
      if (response.body.code === 401) {
        payload.onSuccess(response.body.message)
        commit(types.LOGIN, payload.email)
        payload.router.push('/')
        return
      }
      if (response.body.code !== 0) {
        payload.onFail(response.body.message)
        return
      }
      let email = response.body.data.email
      commit(types.LOGIN, email)
      payload.onSuccess('成功')
      payload.router.push('/')
    }, function (error) {
      payload.onFail('error ' + error)
      console.log('error ' + error)
    })
}

export const showModal = ({
  commit
}, payload) => {
  commit(types.SHOW_MODAL, payload.title, payload.message)
}

export const dismissModal = ({
  commit
}, payload) => {
  commit(types.DISMISS_MODAL)
}

export const userCheck = ({
  commit
}, payload) => {
  Vue.http
    .get(`${BASE_API_URL}user/check`)
    .then(function (response) {
      if (response.body.code !== 0) {
        payload.router.push('/login')
        return
      }
      let email = response.body.data.email
      commit(types.LOGIN, email)
    }, function (error) {
      console.log('error ' + error)
    })
}

const getDirection = (direction, callback) => {
  // Backend will generate 304 if the direction is resolved.
  Vue.http
    .get(`${BASE_API_URL}directions/name/${direction.name}`)
    .then(function (response) {
      if (!response.body) {
        console.log('server return null')
        return
      }
      if (Number.parseInt(response.body.code) !== 0) {
        console.log('error: ' + response.body.message)
        return
      }
      let direction = response.body.data
      callback(direction)
    }, function (error) {
      console.log('error: ' + error)
    })
}

export const getDirectionsList = ({
  commit
}, payload) => {
  let page = payload.page
  Vue.http
    .get(`${BASE_API_URL}directions/listname/${page}`)
    .then(function (response) {
      if (!response.body) {
        console.log('server return null')
        return
      }
      if (Number.parseInt(response.body.code) !== 0) {
        console.log('error: ' + response.body.message)
        return
      }
      let list = response.body.data
      commit(types.UPDATE_DIRECTIONS, list)
      for (let i = 0; i < list.length; ++i) {
        let item = list[i]
        getDirection(item, function (direction) {
          commit(types.UPDATE_DIRECTION, {
            direction,
            index: i
          })
        })
      }
    }, function (error) {
      console.log('error: ' + error)
    })
}

export const getTasksList = ({
  commit
}, payload) => {
  let page = payload.page
  Vue.http
    .get(`${BASE_API_URL}tasks/list/${page}`)
    .then(function (response) {
      commit(types.UPDATE_TASKS, response.body, page)
    }, function (error) {
      console.log('error: ' + error)
    })
}

export const userLogout = ({
  commit
}, payload) => {
  Vue.http
    .get(`${BASE_API_URL}user/signout`)
    .then(function (response) {
      if (response.body.code !== 0) {
        return
      }
      console.log(`user logout`)
      commit(types.LOGOUT)
      payload.router.push('/login')
    }, function (error) {
      console.log('error' + error)
    })
}

export const userRegister = ({
  commit
}, payload) => {
  Vue.http
    .post(`${BASE_API_URL}user/signup`, {
      email: payload.email,
      password: payload.password,
      bio: payload.bio
    })
    .then(function (response) {
      if (response.body.code !== 0) {
        console.log('register error' + JSON.stringify(response.body))
        payload.onFail('' + response.body.message)
        return
      }
      commit(types.LOGIN, payload.email)
      payload.onSuccess('ok')
      payload.router.push('/')
    }, function (error) {
      console.log('error' + error)
      payload.onFail('' + error)
    })
}

export const toggleSidebar = ({
  commit
}, opened) => {
  commit(types.TOGGLE_SIDEBAR, opened)
}

export const toggleDevice = ({
  commit
}, device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({
  commit
}, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({
  commit
}, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}
