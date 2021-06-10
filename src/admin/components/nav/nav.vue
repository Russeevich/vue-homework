<template lang="pug">
    .nav-component
        .container.container--navigation
            div.nav__list
                router-link(v-for="(link,index) in links" :key="index" :to="link.href" class="nav__link" exact).nav__item
                    div(class="nav__title") {{link.title}}

</template>

<script>
export default {
    props: {
        activeIndex:{
            type: Number,
            default: 0
        },
        links:{
            type: Array,
            default: []
        }
    },
    methods:{
        getActive(index){
            return index === this.activeIndex ? 'active': ''
        }
    }
}
</script>
<style lang="postcss" scoped src="./nav.pcss"></style>

