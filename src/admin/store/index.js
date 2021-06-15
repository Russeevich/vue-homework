import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import user from './modules/user'
import works from './modules/works'
import reviews from './modules/reviews'

Vue.use(Vuex)


export const store = new Vuex.Store({
    modules: {
        category,
        user,
        works,
        reviews
    }
})