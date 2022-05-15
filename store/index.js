export const state = () => {
  return {
    preloaded: false
  }
}

export const mutations = {
  setPreload(state, payload) {
    state.preloaded = payload
  },
}