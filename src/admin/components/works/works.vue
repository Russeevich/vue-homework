<template lang="pug">
    .works
        .works__header
            img.works__img(:src="src")
            ul.works__tags
                li(v-for="(tag,index) in techs" :key="index" v-if="tag").works__tag {{tag}}
        .works__content
            .works__info
                .works__caption {{work.title}}
                .works__text {{work.description}}
                a(:href="work.link").works__link {{work.link}}
            .works__btns
                icon(title="Править" symbol="pencil" @click="$emit('changeCard', work.id)")
                icon(title="Удалить" symbol="cross" @click="$emit('removeCard', work.id)")


</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            default: {},
            required: true
        }
    },
    computed: {
        src(){
            return `https://webdev-api.loftschool.com/${this.work.photo}`
        },
        techs(){
            return this.work.techs.split(',').filter(item => item !== '' && item !== ' ')
        },
        getTags(index){
            console.log(index)
            return tag.trim().split(' ').join('').length > 0
        }
    },
    components: {
        icon: () => import('../icon')
    }
    
}
</script>

<style lang="postcss" scoped src="./works.pcss">

</style>