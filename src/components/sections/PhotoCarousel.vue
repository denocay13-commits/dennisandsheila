<template>
  <section class="section photo-carousel-section" v-if="images.length">
    <Swiper
      :modules="[EffectCoverflow, Navigation, Autoplay]"
      effect="coverflow"
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :loop="true"
      :speed="700"
      :navigation="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false
      }"
      :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 140,
        modifier: 1.5,
        scale: 0.92,
        slideShadows: false
      }"
      class="dm-swiper"
    >
      <SwiperSlide
        v-for="(image, index) in images"
        :key="index"
        class="dm-swiper-slide"
      >
        <img :src="image" :alt="`Carousel image ${index + 1}`" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
</script>