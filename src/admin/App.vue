<template lang="pug">
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
    contents(
      :title="getTitle",
      :category="category"
      @addcard="addcard"
      @delSkill="delSkill"
      @saveSkill="saveSkill"
      @addSkill="addSkill"
    )
</template>

<script>
export default {
  components: {
    headerComp: () => import('./components/header'),
    navigation: () => import('./components/nav'),
    contents: () => import('./components/content')
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
      },
      category: []
    }
  },
  created(){
    this.category = require('./category.json')
  },
  computed: {
    getTitle(){
      return this.nav.links[this.activeIndex]
    }
  },
  methods:{
    addcard(value){
      if(value.id === -1){
      var maxId = 0
      this.category.map(obj=>{     
          if (obj.id > maxId) maxId = obj.id;    
      })
      this.category.unshift(
          {
            id: maxId + 1,
            caption: value.value,
            skills: []
          }
        )
      } else {
        this.category = this.category.map(item =>{
            if(item.id !== value.id)
              return item
            else {
              item.caption = value.value
              return item
            }
        })
      }
    },
    saveSkill(value){
      this.category[value.parentId].skills = this.category[value.parentId].skills.map(item =>{ 
        if(item.id !== value.value.id)
          return item
        else {
          item = value.value
          return item
        }
      })
    },
    delSkill(value){
      this.category.forEach(items => {
        if(items.id === value.parentId)
          items.skills = items.skills.filter(item => item.id !== value.id)
      }) 
    },
    addSkill(value){
      var maxId = 0
      this.category.forEach(items => {
        if(items.id === value.parentId)
        items.skills.map(obj=>{     
          if (obj.id > maxId) maxId = obj.id;    
        })
      })
      this.category.forEach(items => {
        if(items.id === value.parentId)
          items.skills = [
            ...items.skills,
            {
              id: maxId + 1,
              name: value.name,
              percent: parseInt(value.percent)
            }
          ]
      })
    }
  }
}
</script>
<style lang="postcss" src="./styles.pcss"></style>
