import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      gestantes: [],
      exames: [],
      prescricoes: [],
    };
  },
  mutations: {
    setGestantes(state, gestantes) {
      state.gestantes = gestantes;
    },
    setExames(state, exames) {
      state.exames = exames;
    },
    setPrescricoes(state, prescricoes) {
      state.prescricoes = prescricoes;
    },
  },
  actions: {
    async fetchGestantes({ commit }) {
      const response = await fetch("http://localhost:5000/api/gestantes");
      const data = await response.json();
      commit("setGestantes", data);
    },
  },
});

export default store;
