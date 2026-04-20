<template>
  <section id="photos" class="section gallery-section">

    <div class="prenup-header">
      <div class="prenup-title-wrap">
        <span class="prenup-script">the</span>
        <h2 class="prenup-title">PRENUP</h2>
      </div>
    </div>

    <div v-if="images.length >= 1" class="prenup-layout">
      <div class="prenup-featured">
        <img :src="images[0]" alt="Featured prenup" />
      </div>

      <div class="prenup-grid">
        <div
          v-for="(image, index) in gridImages"
          :key="index"
          class="prenup-grid-item"
        >
          <img :src="image" />
        </div>
      </div>
    </div>

    <!-- KEEP ONLY THIS -->
    <img :src="divider" class="floral-divider" />

  </section>
</template>

<script setup>
import { computed } from 'vue'
import divider from '../../assets/images/decor/floral-divider.png'

const props = defineProps({
  images: Array
})

const gridImages = computed(() => props.images.slice(1, 5))
</script>