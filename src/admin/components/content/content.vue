<template lang="pug">
    .content-component
        .container.container--content
            contentHeader(
                :title="title"
                :onChange="onChange"
                @add="add"
            )
            contentMain(
                :category="category"
                :onChange="onChange"
                @delete="remove"
                @addcard="addcard"
                @delSkill="$emit('delSkill', $event)"
                @saveSkill="$emit('saveSkill', $event)"
                @addSkill="$emit('addSkill', $event)"
            )
</template>

<script>

export default {
    props:{
        title:{
            type: String,
            default: "Обо мне"
        },
        category:{
            type: Array,
            default: () => []
        }
    },
    components: {
        contentHeader: () => import('../content-header'),
        contentMain: () => import('../content-main')
    },
    data(){
        return{
            onChange: false
        }
    },
    methods: {
        add(){
            this.onChange = true
        },
        remove(){
            this.onChange = false
        },
        addcard(value){
            this.onChange = false
            this.$emit('addcard', value)
        }
    }
}

</script>

<style lang="postcss" scoped src="./content.pcss"></style>