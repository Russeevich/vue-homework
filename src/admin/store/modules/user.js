import axios from '../../request'

const user = {
    state: {
        token: localStorage.getItem('token'),
        id: -1
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        logout(state) {
            state.token = ''
            localStorage.setItem('token', '')
        },
        saveId(state, id) {
            state.id = id
        }
    },
    actions: {
        async getToken(store, user) {
            try {
                const data = await axios.post('/login', user)
                store.commit('setToken', data.data.token)
            } catch (err) {
                console.log(err.message)
            }
        },
        async getUserInfo(store) {
            axios.defaults.headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
            try {
                const data = await axios.get('/user')
                store.commit('saveId', data.data.user.id)
            } catch (err) {
                console.log(err.message)
            }
        },
        async getLogout(store) {
            try {
                await axios.post('/logout')
                store.commit('logout')
            } catch (err) {
                console.log(err.message)
            }
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
        },
        getId: (state) => {
            return state.id
        }
    }
}

export default user