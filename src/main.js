import Vue from 'vue'

import Vuex from 'vuex'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import VModal from 'vue-js-modal/dist/index.nocss.js'

import 'vue-js-modal/dist/styles.css'



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import VModal from 'vue-js-modal'
import VuePaginate from 'vue-paginate'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import { Autocomplete } from 'element-ui';
import 'element-ui/lib/theme-chalk/autocomplete.css';
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}

// set ElementUI lang to EN
Vue.use(Vuex)
Vue.use(ElementUI, { locale })
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })
    // Vue.use(ElementUI)
Vue.use(VuePaginate)
Vue.config.productionTip = false
Vue.use(Autocomplete);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})