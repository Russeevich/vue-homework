import Vue from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.css"
import axios from 'axios'

const btns = {
    props: ['progress'],
    template: "#reviews-btns",
    methods: {
        getActive(dir) {
            switch (dir) {
                case 'next':
                    return this.progress >= 1 ? '' : 'active'
                case 'prev':
                    return this.progress <= 0 ? '' : 'active'
            }
        }
    }
}

const reviews = {
    props: ['reviews', 'sliderOptions'],
    template: "#reviews-content",
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        slide(dir) {
            const slider = this.$refs['slider'].$swiper
            switch (dir) {
                case 'next':
                    slider.slideNext()
                    break
                case 'prev':
                    slider.slidePrev()
                    break
            }
            this.$emit('changeProgress', slider.progress)
        }
    },
    created() {
        this.$parent.$on('slide', this.slide)
    }
}

new Vue({
    el: "#reviews-block",
    template: "#reviews-display",
    components: {
        reviews,
        btns
    },
    data() {
        return {
            reviews: [],
            sliderOptions: {
                slidesPerView: 1,
                spaceBetween: 0,
                breakpointsInverse: true,
                spaceBetween: 0,
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                    }
                }
            },
            progress: 0
        }
    },
    methods: {
        requireReviewsArr(data) {
            return data.map(item => {
                const image = require(`../images/content/${item.pic}`).default
                item.pic = image
                return item
            })
        },
        slide(val) {
            this.$emit('slide', val)
        },
        changeProgress(val) {
            this.progress = val
        }
    },
    created() {
        axios.get('https://webdev-api.loftschool.com/reviews/456').then(data => {
            console.log(data.data)
            this.reviews = data.data.map(item => ({ id: item.id, name: item.author, pic: `https://webdev-api.loftschool.com/${item.photo}`, text: item.text }))
        })
    }
})