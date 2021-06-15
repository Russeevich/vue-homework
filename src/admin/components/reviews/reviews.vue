<template lang="pug">
li.reviews--item
    card.reviews--card
        .reviews--header(slot="title")
            user(size="3.1" :name="review.author" :position="review.occ" :src="getSrc")
        .reviews--edit(slot="content")
            .reviews--text {{review.text}}
            .reviews--btns
                icon(title="Править" symbol="pencil" @click="$emit('changeReview', review)")
                icon(title="Удалить" symbol="cross" @click="removeReview")    
</template>

<script>
import { mapActions } from 'vuex'
import defaultUser from '../../images/User.png'
export default {
    props: {
        review: {
            type: Object,
            default: {}
        }
    },
    computed: {
        getSrc(){
            return this.review.photo ? `https://webdev-api.loftschool.com/${this.review.photo}` : defaultUser
        }
    },
    components: {
         card: () => import('../card'),
         user: () => import('../user'),
         icon: () => import('../icon')
    },
    methods: {
        ...mapActions(['deleteReview']),
        removeReview(){
            this.deleteReview(this.review.id)
        }
    }
}
</script>


<style lang="postcss" scoped src="./reviews.pcss"></style>