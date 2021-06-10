<template lang="pug">
    .content-component.works-component
        .container.container--content.container--works
            content-header(title="Работы")
            card.works__card
                h4(slot="title").works__title Редактирование работы
                .works__edit(slot="content")
                    drop-img()
                    works-form()
            ul.works__content
                 li.works__item
                    squareBtn(type="square" title="Добавить работу").works__button       
                 li.works__item
                    works      
                 li.works__item
                    works
                 li.works__item
                    works

</template>

<script>
export default {
    components:{
        card: () => import('../card'),
        contentHeader: () => import('../content-header'),
        dropImg: () => import('../drop-img'),
        worksForm: () => import('../works-form'),
        squareBtn: () => import('../button'),
        works: () => import('../works')
    }
}
</script>

<style scoped lang="pcss" src="./works-content.pcss"></style>