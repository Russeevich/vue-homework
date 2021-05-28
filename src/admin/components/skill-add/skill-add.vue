<template lang="pug">
    .skill__add-component
        appInput(v-model="title" noSidePaddings :blocked="blocked" placeholder="Новый навык" :errorMessage="errorMessage.title").skill__name
        appInput(v-model="percentage" :blocked="blocked" center :errorMessage="errorMessage.percent").skill__percent
        iconedBtn(type="iconed" title="" big @click="addSkill" :class="['skill__add', {'blocked': blocked}]")
</template>

<script>

export default {
    props: {
        blocked: {
            type: Boolean,
            default: false
        },
        parentId:{
            type: Number,
            default: -1
        }
    },
    components:{
        appInput: () => import('../input'),
        iconedBtn: () => import('../button')
    },
    data(){
        return {
            title: '',
            percentage: 100,
            errorMessage: {
                title: null,
                percent: null 
            }
        }
    },
    methods: {
        addSkill(){
            this.errorMessage = {
                title: null,
                percent: null
            }
            if(this.title.length < 2 || this.percentage < 0 || this.percentage > 100){
                if(this.title.length < 2){
                    this.errorMessage.title = 'Минимальная длина 2 символа'
                }
                if(this.percentage < 0 || this.percentage > 100){
                    this.errorMessage.percent = 'Не может быть < 0 и > 100'
                }
                return
            }

            if(this.parentId >= 0){
                this.$emit('addSkill', {
                    parentId: this.parentId,
                    name: this.title,
                    percent: this.percentage
                })
                this.title = ''
                this.percentage = 100
            }
        }
    }
}
</script>

<style lang="postcss" src="./skill-add.pcss"></style>