<template>
  <button 
    v-on="$listeners"
    :class="['button-component', {'big' : big}]"
  >{{title}}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить группу"
    },
    big: Boolean
  }
};
</script>


<style lang="postcss" scoped src="./iconedBtn.pcss"></style>