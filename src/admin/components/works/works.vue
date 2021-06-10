<template lang="pug">
    .works
        .works__header
            img.works__img(:src="src")
            ul.works__tags
                li.works__tag html
                li.works__tag html
                li.works__tag html
        .works__content
            .works__caption Сайт школы образования
            .works__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .works__link http://loftschool.ru
            .works__btns
                icon(title="Править" symbol="pencil")
                icon(title="Удалить" symbol="cross")


</template>

<script>
import img from '../../images/background.png'
export default {
    data(){
        return{
            src: img
        }
    },
    components: {
        icon: () => import('../icon')
    }
    
}
</script>

<style lang="postcss" scoped src="./works.pcss">

</style>