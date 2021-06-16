<template lang="pug">
    .content-component.reviews__content-component
        .container.container--content.container--reviews-content
            content-header(title="Отзывы")
            card(v-if="onChange").reviews__content--create
                h4(slot="title").reviews__content--title {{onChangeReview ? 'Редактирование отзыва' : 'Новый отзыв'}}
                reviewsForm(slot="content" @remove="change" :reviewItem="reviewItem" :photos="photo" :onChangeReview="onChangeReview")
            ul.reviews__content--list
                li(v-if="!onChange").reviews__content--item
                    squareBtn(type="square" title="Добавить работу" @click="change").reviews__content--button
                reviews(v-for="review of getReviews" :key="review.id" :review="review" @changeReview="changeReview")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import background from '../../images/background.png'
export default {
    components:{
        contentHeader: () => import('../content-header'),
        squareBtn: () => import('../button'),
        card: () => import('../card'),
        reviewsForm: () => import('../reviews-form'),
        reviews: () => import('../reviews')
    },
    data(){
        return {
            onChange: false,
            src: background,
            reviewItem: {},
            photo: '',
            onChangeReview: false
        }
    },
    created(){
         setTimeout(() => {
            this.loadReviews()
        }, 1000)
    },
    computed: {
        ...mapGetters(['getReviews'])
    },
    methods: {
        ...mapActions(['loadReviews']),
        change(){
            this.onChange = !this.onChange
            if(this.onChange)
                window.scrollTo(0, 200)
            else {
                this.reviewItem = {}
                this.photo = ''
                this.onChangeReview = false
            }
        },
        changeReview(payload){
            this.onChange = true
            this.onChangeReview = true
            this.reviewItem = payload
            this.photo = `https://webdev-api.loftschool.com/${payload.photo}`
        }
    }
}
</script>

<style lang="postcss" scoped src="./reviews-content.pcss">

</style>