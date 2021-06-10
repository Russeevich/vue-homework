<template lang="pug">
    .user-component
        avatar(
            v-bind="$attrs"
            :size="size"
        )
        .user__info
            h4(:class="['user__name', {'user__black': position}]") {{name}}
            h2(class="user__position" v-if="position") {{position}}
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "3"
        },
        name:{
            type: String,
            default: 'Иван Иванов'
        },
        position: {
            type: String,
            default: ''
        }
    },
    components: {
        avatar: () => import('../avatar')
    }
}
</script>
<style lang="postcss" scoped src="./user.pcss"></style>