import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    strict: false // 嚴格模式，禁止直接修改 state
});
