<template lang="pug">
form.reviews__form--main
    .reviews__form--block 
        img(:src="getPhoto").reviews__form--img
        appButton(title="Добавить фото" plain types="file" @change="change").reviews__form--add
    .reviews__form--block
        .reviews__form--inputs
            appInput(title="Имя автора" v-model="review.author").reviews__form--input
            appInput(title="Титул автора" v-model="review.occ").reviews__form--input
        appInput(title="Отзыв" fieldType="textarea" v-model="review.text").works__form--input
        .reviews__form--button-block
            appButton(title="Отмена" plain @click="$emit('remove')")
            appButton(title="Сохранить" @click="saveChange")
</template>

<script>
import { mapActions } from 'vuex'
import defaultUser from '../../images/User.png'
export default {
    props:{
        reviewItem: {
            type: Object,
            default: {
                photo: defaultUser,
                author: '',
                occ: '',
                text: ''
            }
        },
        photos: {
            type: String
        },
        onChangeReview: Boolean
    },
    components: {
        appButton: () => import('../button'),
        appInput: () => import('../input')
    },
    data(){
        return {
            review: {...this.reviewItem},
            photo: this.photos
        }
    },
    computed:{
        getPhoto(){
            return this.photo.length ? this.photo : defaultUser
        }
    },
    methods:{
        ...mapActions(['saveReviews', 'updateReview']),
        change(e){
            const file = e.target.files[0]

            this.review.photo = file

            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                this.photo = reader.result
            }
        },
        saveChange(){
            if(!this.onChangeReview){
                this.saveReviews(this.review)
            } else {
                this.updateReview(this.review)
            }
            this.$emit('remove')
        }
    }
}
</script>

<style lang="postcss" scoped src="./reviews-form.pcss"></style>