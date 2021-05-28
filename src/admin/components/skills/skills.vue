<template lang="pug">
    .skills-content
        appInput(v-model="title" noSidePaddings :blocked="blocked").skills__name
        appInput(v-model="percentage" :blocked="blocked").skills__percent
        .skills__actions
            template(v-if="blocked")
                icon(grayscale symbol="pencil" @click="unBlocked").skills__action
                icon(grayscale symbol="trash" @click="$emit('delSkill', {id, parentId})").skills__action
            template(v-else)
                icon(symbol="tick" @click="saveSkill").skills__action
                icon(symbol="cross" @click="oldValue").skills__action
</template>

<script>

export default {
    props: {
        name:{
            type: String,
            default: ''
        },
        percent:{
            type: Number,
            default: 0
        },
        id:{
            type: Number,
            default: -1
        },
        parentId:{
            type: Number,
            default: -1
        }
    },
    components: {
        appInput: () => import('../input'),
        icon: () => import('../icon')
    },
    data(){
        return{
            title: this.name,
            percentage: this.percent,
            oldPercent: this.percent,
            oldTitle: this.name,
            blocked: true
        }
    },
    methods: {
        unBlocked(){
            this.blocked = false
        },
        saveSkill(){
            this.blocked = true
            this.oldPercent = this.percentage
            this.oldTitle = this.title
            this.$emit('saveSkill', {
                parentId: this.parentId, 
                value: {
                        id:this.id,
                        name: this.title, 
                        percent: parseInt(this.percentage)
                    } 
                }
            )
        },
        oldValue(){
            this.blocked = true
            this.percentage = this.oldPercent
            this.title = this.oldTitle
        }
    }
}

</script>

<style lang="postcss" scoped src="./skills.pcss"></style>