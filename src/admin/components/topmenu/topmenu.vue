<template lang="pug">
.wrapper.admin-wrapper
    .maincontent
        .wrapper
            headerComp(
            :size="user.size" 
            :src="user.src" 
            :name="user.name" 
            :title="header.title" 
            :button="header.button"
            )
            navigation(
            :links="nav.links" 
            :activeIndex="nav.activeIndex"
            )
</template>

<script>
import { mapActions } from 'vuex'
export default {
    components: {
        headerComp: () => import('../header'),
        navigation: () => import('../nav'),
    },
    mounted(){
        this.getUserInfo()
    },
    data() {
        return {
            user: {
                size: "3.1",
                src: "https://picsum.photos/300/300",
                name: 'Николай Назаров'
            },
            header: {
                title: 'Панель администрирования',
                button: 'Выйти'
            },
            nav:{
                activeIndex: 0,
                links: [
                    {title: 'Обо мне', href: '/'},
                    {title: 'Работы', href: '/works'},
                    {title: 'Отзывы', href: '/reviews'}
                ]
            }
        }
    },
    methods: {
        ...mapActions(['getUserInfo'])
    }
}
</script>