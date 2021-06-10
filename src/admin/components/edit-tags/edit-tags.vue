<template lang="pug">
    .edit__tags-component
        appInput(v-model="tags" noSidePaddings :title="title")
        ul.edit__tags--list
            li(v-for="(item, index) of tagsToArray" :key="`${item} ${index}`" v-if="item").edit__tags--item
                tag(close :title="item" @remove="removeTag" :id="index")
</template>

<script>
    export default {
        props: {
            title:{
                type: String,
                default: ''
            }
        },
        components: {
            appInput: () => import('../input'),
            tag: () => import('../tag')
        },
        data(){
            return {
                tags: ""
            }
        },
        computed: {
            tagsToArray(){
                return this.tags.trim().split(',').map(item => {
                    return item.trim().length > 0 ? item : '' ;
                })
            }
        },
        methods: {
            removeTag(id){
                this.tags = this.tagsToArray.filter((_, index) => index !== id).join(', ')
            }
        }
    }
</script>

<style lang="postcss" src="./edit-tags.pcss"></style>