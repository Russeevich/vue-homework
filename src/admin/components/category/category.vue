<template lang="pug">
    card(small=true).category--card
        editInput(
            edit=false
            slot="title" 
            :value="category.caption"
            :id="category.id"
            @addcard="$emit('addcard', $event)"
            @mode="changeMode"
        ).category--edit
        .category--block(slot="content")
            ul.category--skills
                li(v-for="skill in category.skills" :key="skill.id").category--skill
                    skills(
                        :parentId="category.id"
                        :id="skill.id"
                        :name="skill.name"
                        :percent="skill.percent"
                        @delSkill="$emit('delSkill', $event)"
                        @saveSkill="$emit('saveSkill', $event)"
                    )
            skillAdd(
                :parentId="category.id"
                @addSkill="$emit('addSkill', $event)"
                :blocked="edit"
            )
</template>

<script>

export default {
    props: {
        category: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    components:{
        card: () => import('../card'),
        editInput: () => import('../edit-input'),
        skills: () => import('../skills'),
        skillAdd: () => import('../skill-add')
    },
    data(){
        return {
            edit: false
        }
    },
    methods: {
        changeMode(value){
            this.edit = value
        }
    }
}
</script>

<style lang="postcss" src="./category.pcss"></style>