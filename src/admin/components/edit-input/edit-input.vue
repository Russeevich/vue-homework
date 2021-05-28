<template lang="pug">
    .edit__input-component
        editLine(
            placeholder="Название новой группы" 
            v-model="title" 
            :edit="edit"
            @remove="remove"
            @approve="approve"
            @mode="$emit('mode', $event)"
        ).edit__input--field
</template>

<script>

export default {
    props:{
        edit: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        id:{
            type: Number,
            default: -1
        }
    },
    components: {
        editLine: () => import('../editLine')
    },
    data(){
        return {
            title: this.value,
            oldTitle: this.value
        }
    },
    methods: {
        remove(){
            if(this.title.trim() === "" && this.id < 0)
                this.$emit('delete')
            else 
               this.title = this.oldTitle
        },
        approve(value){
            if(value.trim() === "" || !value.length)
                this.$emit('delete')
            else {
                this.$emit('addcard', {value, id: this.id})
                this.oldTitle = this.title
            }
        }
    }
}
</script>

<style lang="postcss" scoped src="./edit-input.pcss"></style>