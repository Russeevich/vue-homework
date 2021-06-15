<template lang="pug">
    div.drop
        div(:class="['drop__img-component', {'active': enter}]" @drag="drag" @dragleave="dragleave" @drop.prevent="drop" @dragover.prevent="dragover" @dragend="dragend")
            img(v-if="src" :src="src").drop__img--image
            .drop__img--inner
                h4(v-if="!src").drop__img--title Перетащите или загрузите
                    p для загрузки изображения
                appButton(typeAttr="file" title="Загрузить" @change="$emit('changeImage', $event)" v-if="!src").drop__img--button
        appButton(title="Изменить превью" v-if="src" @change="$emit('changeImage', $event)" types="file").drop__img--change
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            default: ""
        }
    },
    data(){
        return {
            enter: false
        }
    },
    components:{
        appButton: () => import('../button')
    },
    methods:{
        drag(){
            console.log(true)
        },
        dragleave(){
            this.enter = false
        },
        drop(event){
            this.enter = false
            this.$emit('changeImage', event)
        },
        dragover(){
            this.enter = true
        },
        dragend(){
            this.enter = false
        }
    }
}
</script>

<style lang="postcss" scoped src="./drop-img.pcss">

</style>