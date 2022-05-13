const qs = require('qs')

export default function ({ $axios, store, app }) {
  $axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params)
  }
  // const token = app.$cookies.get('an_token')
  // if (token) {
  //   $axios.defaults.headers.common.Authorization = 'Bearer ' + token
  //   $axios
  //     .get('api/users/me')
  //     .then((res) => {
  //       console.log('me was called', res)
  //       store.commit('setUser', res.data)
  //     })
  //     .catch(() => {
  //       console.log('there is an error')
  //       app.$cookies.remove('an_token')
  //       delete $axios.defaults.headers.common.Authorization
  //       store.commit('setUser', {})
  //     })
  // } else {
  //   store.commit('setUser', {})
  // }

  // $axios.onError((error) => {
  //   if (
  //     error.response &&
  //     (error.response.status === 401 || error.response.status === 403)
  //   ) {
  //     store.dispatch('logout')
  //   }
  // })
}
