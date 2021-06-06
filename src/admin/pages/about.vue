<template lang="pug">
  contents(
  :title="getTitle",
  :category="getCategory"
  )
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    contents: () => import('../components/content')
  },
  data() {
    return {
      nav:{
        activeIndex: 0,
        links: [
          {title: 'Обо мне', href: 'admin/about'},
          {title: 'Работы', href: 'admin/works'},
          {title: 'Отзывы', href: 'admin/reviews'}
        ]
      }
    }
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
    ]),
    getTitle(){
      return this.nav.links[this.activeIndex]
    }
  },
  methods:{
    ...mapActions(['loadCategory', 'getUserInfo', 'loadSkill'])
  }
}
</script>
