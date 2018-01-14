import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import hello from './modules/hello'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        hello
    }
})