<template lang="pug">
    .content-component.works-component
        .container.container--content.container--works
            content-header(title="Работы")
            card.works__card(v-if="onChange")
                h4(slot="title").works__title Редактирование работы
                .works__edit(slot="content")
                    works-form(@cancle="change" :card="card" :photo="getPhoto" :changeInfo="changeInfo")
            ul.works__content
                 li.works__item.works__first(v-if="!onChange" @click="change")
                    squareBtn(type="square" title="Добавить работу").works__button       
                 li.works__item(v-for="work in getWorks" :key="work.id")
                    works(:work="work" @changeCard="changeCard" @removeCard="removeCard")

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    components:{
        card: () => import('../card'),
        contentHeader: () => import('../content-header'),
        dropImg: () => import('../drop-img'),
        worksForm: () => import('../works-form'),
        squareBtn: () => import('../button'),
        works: () => import('../works')
    },
    data(){
        return {
            onChange: false,
            card: {},
            photo: '',
            changeInfo: false
        }
    },
    computed: {
    ...mapGetters(['getWorks', 'getWorkById']),
        getPhoto(){
            return this.photo ? `https://webdev-api.loftschool.com/${this.photo}`: ''
        }
    },
    created(){
        setTimeout(() => {
            this.loadWork()
        }, 1000)
    },
    methods: {
        ...mapActions(['loadWork', 'deleteWork']),
        changeCard(id){
            this.onChange = false
            this.card = this.getWorkById(id)
            this.card.id = id
            this.photo = this.card.photo
            this.onChange = true
            this.changeInfo = true
            window.scrollTo(0, 200)
        },
        removeCard(id){
            this.deleteWork(id)
        },
        change(){
            this.onChange = !this.onChange
            if(this.onChange)
                window.scrollTo(0, 200)
            else {
                this.card = {}
                this.photo = ''
            }
        }
    }
}
</script>

<style scoped lang="pcss" src="./works-content.pcss"></style>