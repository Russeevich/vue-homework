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
export default {
    components: {
        headerComp: () => import('../header'),
        navigation: () => import('../nav'),
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
                    {title: 'Обо мне', href: 'admin/about'},
                    {title: 'Работы', href: 'admin/works'},
                    {title: 'Отзывы', href: 'admin/reviews'}
                ]
            }
        }
    }
}
</script>