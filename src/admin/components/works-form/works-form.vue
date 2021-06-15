<template lang="pug">
    .works__form-component
        drop-img(:src="photos" @changeImage="changeImage")
        form.works__form--form(@submit.prevent="saveChange")
            appInput(title="Название" v-model="cards.title").works__form--input
            appInput(title="Ссылка" v-model="cards.link").works__form--input
            appInput(title="Описание" v-model="cards.description" fieldType="textarea").works__form--input
            editTags(title="Добавление тэга" v-model="cards.techs" :valueInput="cards.techs").works__form--input
            .works__form--btns
                appButton(title="Отмена" plain @click="$emit('cancle')" types="reset")
                appButton(title="Сохранить" types="submit")
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        card: {
            type: Object,
            default: {
                title: '',
                techs: '',
                photo: '',
                link: '',
                description: '',
                id: -1
            }
        },
        photo: {
            type: String,
            default: ''
        },
        changeInfo: Boolean
    },
    components: {
        appInput: () => import('../input'),
        editTags: () => import('../edit-tags'),
        appButton: () => import('../button'),
        dropImg: () => import('../drop-img')
    },
    data(){
        return {
            cards: {
                ...this.card
            },
            photos: this.photo
        }
    },
    watch: {
        card(val){
            this.cards = val
        },
        photo(val){
            this.photos = val
        }
    },
    methods: {
        ...mapActions(['saveWorks', 'updateWork']),
        saveChange(){
            if(!this.changeInfo)
            this.saveWorks(this.cards)
            else{
                this.updateWork(this.cards)
            }

            this.$emit('cancle')
        },
        changeImage(val){
            const file = val.dataTransfer ? val.dataTransfer.files[0] : val.target.files[0]
            // if(file.size > 1500)
            //     return
            this.cards.photo = file
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () =>{
                this.photos = reader.result
            }
        }
    }
}
</script>

<style lang="postcss" scoped src="./works-form.pcss">

</style>