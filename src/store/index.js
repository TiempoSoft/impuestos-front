import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)
const moduloProveedorNuevo = {
    state: () => ({
        CodigoCuentaGastoActivo: "",
        DescripCuentaGastoActivo: "",
        CodigoCuentaGastoPasivo: "",
        DescripCuentaGastoPasivo: "",
    }),
    mutations: {
        ResetStateProveedores(state) {
            state.CodigoCuentaGastoActivo = "",
                state.DescripCuentaGastoActivo = "",
                state.CodigoCuentaGastoPasivo = "",
                state.DescripCuentaGastoPasivo = "",
                console.log("Reset");
        }
    },
    actions: {},
    getters: {}
}
const moduloComprobantes = {
    state: () => ({
        ResultadoExcel: "",
        tablaCliente: "",
        descrip: "",
        codigo: "",
    }),
    mutations: {},
    actions: {},
    getters: {}
}
const moduloRubrosNuevo = {
    state: () => ({
        CodigoCuentaRubroVenta: "",
        DescripCuentaRubroVenta: "",
        CodigoCuentaRubroCompra: "",
        DescripCuentaRubroCompra: "",
    }),
    mutations: {
        ResetState(state) {
            state.CodigoCuentaRubroVenta = "",
                state.DescripCuentaRubroVenta = "",
                state.CodigoCuentaRubroCompra = "",
                state.DescripCuentaRubroCompra = "";
            console.log("Reset");
        }
    },
    actions: {},
    getters: {}
}
const moduloRubrosEditar = {
    state: () => ({
        CodigoCuentaRubroVenta: "",
        DescripCuentaRubroVenta: "",
        CodigoCuentaRubroCompra: "",
        DescripCuentaRubroCompra: "",
    }),
    mutations: {
        ResetState: (state) => {
            state.CodigoCuentaRubroCompra = "",
                state.DescripCuentaRubroCompra = "",
                state.CodigoCuentaRubroVenta = "",
                state.DescripCuentaRubroVenta = "";
            console.log('ModalNuevoRubro')
        }
    },
    actions: {},
    getters: {}
}
const moduloClientes = {
    state: () => ({
        CodigoCuentaDeudores: "",
        DescripCuentaDeudoresEdit: "",
        DescripCuentaDeudoresNuevo: "",
    }),
    mutations: {},
    actions: {},
    getters: {}
}
const moduloResponsables = {
    state: () => ({
        CodigoTipoActs: "",
        CodigoTipoSedes: "",
    }),
    mutations: {
        ResetStateResponsables: (state) => {
            state.CodigoTipoActs = "",
                state.CodigoTipoSedes = "",
                console.log('ModalNuevoRubro')
        }
    },
    actions: {},
    getters: {}
}
const moduloliquiGcoefact = {
    state: () => ({
        fechaliquicoefact: "",
        calcliquicoefact: "",

    }),

    mutations: {
        ResetState(state) {
            state.
            state.
            console.log("Reset")
        }
    },
    actions: {},
    getters: {}
}



const store = new Vuex.Store({
    modules: {
        app,
        a: moduloResponsables,
        b: moduloClientes,
        c: moduloRubrosNuevo,
        d: moduloRubrosEditar,
        e: moduloProveedorNuevo,
        f: moduloComprobantes,
        settings,
        user
    },
    state: {},
    mutations: {},
    getters
})
store.state.a
store.state.b
store.state.c
store.state.e
store.state.f

export default store