import axios from '../../request'

const works = {
    state: {
        works: []
    },
    mutations: {
        saveWorks(state, data) {
            state.works.push(data)
        },
        loadWork(state, data) {
            state.works = data
        },
        deleteWork(state, id) {
            state.works = state.works.filter(item => item.id !== id)
        },
        updateWork(state, data) {
            state.works = state.works.map(item => item.id === data.id ? data : item)
        }
    },
    actions: {
        async saveWorks(store, payload) {
            try {
                const formData = new FormData()
                Object.keys(payload).forEach(item => {
                    formData.append(item, payload[item])
                })
                const data = await axios.post('/works', formData)
                console.log(data)
                store.commit('saveWorks', await data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async loadWork(store) {
            try {
                const id = await store.getters.getId
                const data = await axios.get(`/works/${id}`)
                store.commit('loadWork', await data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async deleteWork(store, id) {
            try {
                await axios.delete(`/works/${id}`)
                store.commit('deleteWork', id)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async updateWork(store, payload) {
            try {
                const formData = new FormData()
                Object.keys(payload).forEach(item => {
                    formData.append(item, payload[item])
                })
                const data = await axios.post(`/works/${payload.id}`, formData)
                store.commit('updateWork', await data.data.work)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        }
    },
    getters: {
        getWorks: (state) => {
            return state.works
        },
        getWorkById: (state) => (id) => {
            return state.works.find(item => item.id === id)
        }
    }
}

export default works