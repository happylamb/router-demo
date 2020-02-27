import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        Authorization:''
    },
    getters:{
        getAuth:state => {
            return state.Authorization
        }
    },
    mutations:{
        logingSuccess(state, auth){
            state.Authorization = auth
        }
    }

})

export default store


