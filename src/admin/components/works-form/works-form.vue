<template lang="pug">
    form.works__form-component
        appInput(title="Название").works__form--input
        appInput(title="Ссылка").works__form--input
        appInput(title="Описание" fieldType="textarea").works__form--input
        editTags(title="Добавление тэга").works__form--input
        .works__form--btns
            appButton(title="Отмена" plain)
            appButton(title="Сохранить")
</template>

<script>
export default {
    components: {
        appInput: () => import('../input'),
        editTags: () => import('../edit-tags'),
        appButton: () => import('../button')
    }
}
</script>

<style lang="postcss" scoped src="./works-form.pcss">

</style>