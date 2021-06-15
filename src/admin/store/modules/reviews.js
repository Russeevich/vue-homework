import axios from '../../request'

const reviews = {
    state: {
        reviews: []
    },
    mutations: {
        saveReviews(state, review) {
            state.reviews.push(review)
        },
        loadReviews(state, reviews) {
            state.reviews = reviews
        },
        deleteReview(state, id) {
            state.reviews = state.reviews.filter(item => item.id !== id)
        },
        updateReview(state, data) {
            state.reviews = state.reviews.map(item => item.id === data.id ? data : item)
        }
    },
    actions: {
        async loadReviews(store) {
            try {
                const id = await store.getters.getId
                const data = await axios.get(`/reviews/${id}`)
                store.commit('loadReviews', await data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async deleteReview(store, id) {
            try {
                await axios.delete(`/reviews/${id}`)
                store.commit('deleteReview', id)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async saveReviews(store, payload) {
            try {
                const formData = new FormData()
                Object.keys(payload).forEach(item => {
                    formData.append(item, payload[item])
                })
                const data = await axios.post('/reviews', formData)
                console.log(data)
                store.commit('saveReviews', await data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async updateReview(store, payload) {
            try {
                const formData = new FormData()
                Object.keys(payload).forEach(item => {
                    formData.append(item, payload[item])
                })
                const data = await axios.post(`/reviews/${payload.id}`, formData)
                store.commit('updateReview', await data.data.review)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        }
    },
    getters: {
        getReviews: (store) => {
            return store.reviews
        }
    }
}

export default reviews