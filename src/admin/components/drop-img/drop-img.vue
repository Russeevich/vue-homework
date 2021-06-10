<template lang="pug">
    .drop__img-component
        .drop__img--inner
            h4.drop__img--title Перетащите или загрузите
                p для загрузки изображения
            appButton(typeAttr="file" title="Загрузить").drop__img--button
</template>

<script>
export default {
    components:{
        appButton: () => import('../button')
    }
}
</script>

<style lang="postcss" scoped src="./drop-img.pcss">

</style>