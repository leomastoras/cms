// Load Source Sans Pro typeface

import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

require('typeface-source-sans-pro')

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  }
})

export default store
