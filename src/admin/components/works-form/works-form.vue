<template lang="pug">
    .works__form-component
        drop-img(:src="photos" @changeImage="changeImage" :errorMessage="errorMessage.photo")
        form.works__form--form(@submit.prevent="saveChange")
            appInput(title="Название" v-model="cards.title" :errorMessage="errorMessage.title").works__form--input
            appInput(title="Ссылка" v-model="cards.link" :errorMessage="errorMessage.link").works__form--input
            appInput(title="Описание" v-model="cards.description" fieldType="textarea" :errorMessage="errorMessage.description").works__form--input
            editTags(title="Добавление тэга" v-model="cards.techs" :valueInput="cards.techs" :errorMessage="errorMessage.techs").works__form--input
            .works__form--btns
                appButton(title="Отмена" plain @click="$emit('cancle')" types="reset")
                appButton(:title="changeInfo ? 'Сохранить': 'Добавить'" types="submit")
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
            photos: this.photo,
            errorMessage: {
                techs: '',
                description: '',
                link: '',
                title: '',
                photo: ''
            }
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
            this.errorMessage={
                techs: '',
                description: '',
                link: '',
                title: '',
                photo: ''
            }

             if(!this.cards.techs ||!this.cards.description || !this.cards.link || !this.photos || !this.cards.title || this.cards.title.length < 3 ||this.cards.techs.length < 3 || this.cards.description.length < 3 || this.cards.link.length < 3 ){
                if(!this.cards.techs ||this.cards.techs.length < 3){
                    this.errorMessage.techs = "Должно быть больше 2х символов"
                }
                if(!this.cards.description || this.cards.description.length < 3){
                    this.errorMessage.description= "Должно быть больше 2х символов"
                }
                if(!this.cards.link || this.cards.link.length < 3){
                    this.errorMessage.link = "Должно быть больше 2х символов"
                }
                if(!this.cards.title || this.cards.title.length < 3){
                    this.errorMessage.title = "Должно быть больше 2х символов"
                }
                if(!this.photos){
                    this.errorMessage.photo = "Загрузите фото!"
                }
                return
            }

            console.log(true)


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