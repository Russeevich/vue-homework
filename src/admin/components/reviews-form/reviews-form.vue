<template lang="pug">
form.reviews__form--main
    .reviews__form--block
        img(:src="getPhoto").reviews__form--img
        appButton(:title="photo ? 'Изменить фото' :'Добавить фото'" plain types="file" @change="change").reviews__form--add
        .reviews__form--error(v-if="errorMessage.photo") {{errorMessage.photo}}
    .reviews__form--block
        .reviews__form--inputs
            appInput(title="Имя автора" v-model="review.author" :errorMessage="errorMessage.author").reviews__form--input
            appInput(title="Титул автора" v-model="review.occ" :errorMessage="errorMessage.occ").reviews__form--input
        appInput(title="Отзыв" fieldType="textarea" v-model="review.text" :errorMessage="errorMessage.text").works__form--input
        .reviews__form--button-block
            appButton(title="Отмена" plain @click="$emit('remove')")
            appButton(:title="onChangeReview ? 'Сохранить': 'Добавить'" @click="saveChange")
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
            photo: this.photos,
            errorMessage: {
                author: '',
                occ: '',
                text: '',
                photo: ''
            }
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
            this.errorMessage = {
                author: '',
                occ: '',
                text: '',
                photo: ''
            }

            if(!this.review.author ||this.review.author.length < 3 || !this.review.occ || this.review.occ.length < 3 || !this.review.text || this.review.text.length < 3 || !this.review.photo){
                if(!this.review.author ||this.review.author.length < 3){
                    this.errorMessage.author = "Должно быть больше 2х символов"
                }
                if(!this.review.occ || this.review.occ.length < 3){
                    this.errorMessage.occ = "Должно быть больше 2х символов"
                }
                if(!this.review.text || this.review.text.length < 3){
                    this.errorMessage.text = "Должно быть больше 2х символов"
                }
                if(!this.review.photo){
                    this.errorMessage.photo = "Загрузите фото!"
                }
                return
            }

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