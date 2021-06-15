<template>
  <button
    :class="['default-btn-container', 'btn-decorator', {disabled}, {plain}]"
    v-if="typeAttr === 'button' && types!=='file'"
    v-on="$listeners"
    :disabled="disabled"
    :type="types"
  >{{title}}</button>

  <label class="btn-file-container" v-else-if="typeAttr === 'file'">
    <div class="btn-file-fake btn-decorator">{{title}}</div>
    <input class="btn-file-input" type="file" v-on="$listeners" />
  </label>

  <label class="btn-file-container" v-else-if="types === 'file'">
    <div class="btn-file-fake">{{title}}</div>
    <input class="btn-file-input" type="file" v-on="$listeners" />
  </label>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Отправить"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    typeAttr: {
      type: String,
      default: "button",
      validator: value => ["button", "file"].includes(value)
    },
    types: {
      type: String,
      default: "button"
    }
  }
};
</script>

<style lang="postcss" scoped src="./defaultBtn.pcss"></style>