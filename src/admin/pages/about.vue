<template lang="pug">
  contents(
  title="Обо мне",
  :category="getCategory"
  )
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    contents: () => import('../components/content')
  },
  mounted(){
      this.getUserInfo().then(() => {
        setTimeout(() => {
          this.loadCategory().then(() =>{
          this.loadSkill()
        })
        },1000)
      })
  },
  computed: {
    ...mapGetters([
      'getCategory'
    ])
  },
  methods:{
    ...mapActions(['loadCategory', 'getUserInfo', 'loadSkill'])
  }
}
</script>
