import Vue from 'vue'
import axios from 'axios'

const skillsItem = {
    props: ['skill'],
    template: "#skills-item",
    methods: {
        drawCirclePercent() {
            const circle = this.$refs["colored-circle"],
                dashArray = parseInt(
                    getComputedStyle(circle).getPropertyValue('stroke-dasharray')
                ),
                percent = (dashArray / 100) * (100 - this.skill.percent)

            circle.style.strokeDashoffset = percent
        }
    },
    mounted() {
        this.drawCirclePercent()
    }
}

const skillsRow = {
    props: ["category"],
    template: "#skills-row",
    components: {
        skillsItem
    }
}


new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        axios.get('https://webdev-api.loftschool.com/categories/456').then(data => {
            this.skills = data.data
        })
    }
})