export const state = () => {
  return {
    preloaded: false,
    searchWords: undefined,
    fromSearchResult: false,
  }
}

export const mutations = {
  setPreload(state, payload) {
    state.preloaded = payload
  },
  setSearchWords(state, payload) {
    state.searchWords = payload
  },
  setFromSearchResult(state, payload) {
    state.fromSearchResult = payload
  },
}
