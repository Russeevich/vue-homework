<template lang="pug">
    .content-component.reviews__content-component
        .container.container--content.container--reviews-content
            content-header(title="Отзывы")
            card.reviews__content--create
                h4(slot="title").reviews__content--title Новый отзыв
                .reviews__content--main(slot="content")
                    .reviews__content--block 
                        img(:src="user").reviews__content--img
                        appButton(title="Добавить фото" plain)
                    .reviews__content--block
                        .reviews__content--inputs
                            appInput(title="Имя автора").reviews__content--input
                            appInput(title="Титул автора").reviews__content--input
                        appInput(title="Отзыв" fieldType="textarea").works__form--input
                        .reviews__content--button-block
                            appButton(title="Отмена" plain)
                            appButton(title="Сохранить")
            ul.reviews__content--list
                li.reviews__content--item
                    squareBtn(type="square" title="Добавить работу").reviews__content--button
                li.reviews__content--item
                    card.reviews__content--card
                        .reviews__content--header(slot="title")
                            user(size="3.1" name="Иван" position="Директор" :src="src")
                        .reviews__content--edit(slot="content")
                            .reviews__content--text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .reviews__content--btns
                                icon(title="Править" symbol="pencil")
                                icon(title="Удалить" symbol="cross")
                li.reviews__content--item
                    card.reviews__content--card
                        .reviews__content--header(slot="title")
                            user(size="3.1" name="Иван" position="Директор" :src="src")
                        .reviews__content--edit(slot="content")
                            .reviews__content--text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .reviews__content--btns
                                icon(title="Править" symbol="pencil")
                                icon(title="Удалить" symbol="cross")
                li.reviews__content--item
                    card.reviews__content--card
                        .reviews__content--header(slot="title")
                            user(size="3.1" name="Иван" position="Директор" :src="src")
                        .reviews__content--edit(slot="content")
                            .reviews__content--text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .reviews__content--btns
                                icon(title="Править" symbol="pencil")
                                icon(title="Удалить" symbol="cross")
</template>

<script>
import background from '../../images/background.png'
import defaultUser from '../../images/User.png'
export default {
    components:{
        contentHeader: () => import('../content-header'),
        squareBtn: () => import('../button'),
        card: () => import('../card'),
        user: () => import('../user'),
        icon: () => import('../icon'),
        appButton: () => import('../button'),
        appInput: () => import('../input')
    },
    data(){
        return {
            src: background,
            user: defaultUser
        }
    }
}
</script>

<style lang="postcss" scoped src="./reviews-content.pcss">

</style>