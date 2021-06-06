import axios from '../../request'

const category = {
    state: {
        category: [],
        skills: []
    },
    mutations: {
        loadedCat(state, cat) {
            state.category = cat.map(item => ({ id: item.id, caption: item.category }))
        },
        setSkills(state, payload) {
            state.skills = payload.map(item => ({
                id: item.id,
                percent: item.percent,
                name: item.title,
                parentId: item.category
            }))
        },
        createSkillView(state, item) {
            state.skills.push({
                id: item.id,
                percent: item.percent,
                name: item.title,
                parentId: item.category
            })
        },
        updateCat(state, payload) {
            state.category = state.category.map(item => {
                if (item.id === payload.id)
                    item.caption = payload.title
                return item
            })
        },
        updateSkillValue(state, payload) {
            state.skills = state.skills.map(item => {
                if (item.id === payload.id && item.parentId === payload.category)
                    item = {
                        id: payload.id,
                        name: payload.title,
                        percent: parseInt(payload.percent),
                        parentId: payload.category
                    }
                return item
            })
        },
        delSkill(state, id) {
            state.skills = state.skills.filter(item => item.id !== id)
        },
        saveCategory(state, cat) {
            state.category.unshift({ id: cat.id, caption: cat.category })
        },
        delCategory(state, id) {
            state.category = state.category.filter(item => item.id !== id)
        }
    },
    actions: {
        async loadCategory(store) {
            try {
                const data = await axios.get('/categories')
                store.commit('loadedCat', data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async saveCategory(store, title) {
            try {
                const data = await axios.post('/categories', { title })
                store.commit('saveCategory', data.data)
            } catch (err) {
                console.log(`Возникла ошибка: ${err.message}`)
            }
        },
        async deleteCategory(store, id) {
            try {
                await axios.delete(`/categories/${id}`)
                store.commit('delCategory', id)
            } catch (err) {
                console.log(err.message)
            }
        },
        async updCategory(store, cat) {
            try {
                await axios.post(`/categories/${cat.id}`, { title: cat.title })
                store.commit('updateCat', cat)
            } catch (err) {
                console.log(err.message)
            }
        },
        async saveSkill(store, skill) {
            try {
                const data = await axios.post('/skills', skill)
                store.commit('createSkillView', data.data)
            } catch (err) {
                console.log(err.message)
            }
        },
        async loadSkill(store) {
            try {
                const skill = await axios.get(`/skills/${await store.getters.getId}`)
                store.commit('setSkills', skill.data)
            } catch (err) {
                console.log(err.message)
            }
        },
        async deleteSkill(store, id) {
            try {
                await axios.delete(`/skills/${id}`)
                store.commit('delSkill', id)
            } catch (err) {
                console.log(err.message)
            }
        },
        async updSkill(store, payload) {
            const { id, title, category, percent } = payload
            try {
                axios.post(`/skills/${id}`, { title, category, percent })
                store.commit('updateSkillValue', payload)
            } catch (err) {
                console.log(err.message)
            }
        }
    },
    getters: {
        getCategory: (state) => {
            return state.category
        },
        getSkillsParent: (state) => (id) => {
            return state.skills.filter(skill => skill.parentId === id)
        }
    }
}

export default category